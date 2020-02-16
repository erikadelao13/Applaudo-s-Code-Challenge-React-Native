
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { Content, Container } from 'native-base';
import { getGenres, showGenresByPage, searcher } from '../../../api/home'
import { connect } from 'react-redux';
//customs
import styles from './styles';
import Category from '../../../components/Category';
import TopTabBar from '../../../components/HeaderTabs';
import Header from '../../../components/Header';
import SearchResult from '../../../components/SearchResult';
import Loading from '../../../components/LoadingSpinner';
class Home extends Component {
  state = {
    loading: false,
    urlNextPage: null,
    isLoading: false,
    categories: [],
    indexTab: 0,
    querySearch: {
      value: '',
      type: 'text',
      required: 'false'
    },
    searchResults: null,
  }
  componentDidMount = async () => {
    this.getCategories();
  };

  getCategories = async () => {
    this.setState({
      isLoading: true
    });
    try {
      const getGenresList = await getGenres();
      console.log(getGenresList, 'getGenresList')
      this.setState({
        categories: getGenresList.data.data,
        urlNextPage: getGenresList.data.links.next,
        isLoading: false,
      })
    } catch (err) {
      console.log(err)
      this.setState({
        isLoading: false
      });
    }
  };

  loadMoreData = async () => {
    try {
      let { urlNextPage, categories } = this.state;
      if (urlNextPage) {
        let interArray = [...categories];
        let response = await showGenresByPage(urlNextPage);
        let nextArray = [...interArray, ...response.data.data];
        this.setState({
          categories: nextArray,
          urlNextPage: response.data.links.next,
        });
      }
    } catch (err) {
      console.log(err)
    }
  };

  onChangeInputValue = async (key, value) => {
    let { state } = this;
    state[key].value = value;
    this.setState({ ...state });
  };

  render() {
    let { isLoading, indexTab, querySearch } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        {indexTab === 0 && (
          <Header
            headerWithSearch={true}
            stateInput="querySearch"
            textValue={querySearch.value}
            onChangeValue={this.onChangeInputValue}
          />
        )}
        {indexTab === 1 && (
          <Header
            headerWithSearch={true}
            stateInput="querySearch"
            textValue={querySearch.value}
            onChangeValue={this.onChangeInputValue}
          />
        )}
        <Container style={styles.backgroundContainer}>
          <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.backgroundContent}>
            <TopTabBar
              onChangeTab={data => this.setState({ indexTab: data.i })}
              indexTab={indexTab}
              contentTab1={
                querySearch.value === '' ?
                  (
                    !isLoading ?
                      <FlatList
                        data={this.state.categories}
                        showsVerticalScrollIndicator={false}
                        onEndReachedThreshold={0.8}
                        initialNumToRender={5}
                        onEndReached={this.loadMoreData}
                        renderItem={({ item, index }) => (
                          item !== null ?
                            <Category
                              value={querySearch.value}
                              indexTab={indexTab}
                              showCategoryName={<Text style={styles.categoryName}>{item.attributes.name}</Text>}
                              categoryName={item.attributes.slug}
                              type={'anime'}
                            />
                            : null
                        )}
                      />
                      :
                      <Loading color={'#8055E3'} />
                  )
                  :
                  (<SearchResult
                    value={querySearch.value}
                    indexTab={indexTab}
                    type={'anime'}
                  />)

              }
              contentTab2={
                querySearch.value === '' ?
                  (<FlatList
                    data={this.state.categories}
                    onEndReachedThreshold={0.8}
                    initialNumToRender={5}
                    showsVerticalScrollIndicator={false}
                    onEndReached={this.loadMoreData}
                    renderItem={({ item, index }) => (
                      <Category
                        value={querySearch.value}
                        indexTab={indexTab}
                        showCategoryName={<Text style={styles.categoryName}>{item.attributes.name}</Text>}
                        categoryName={item.attributes.slug}
                        type={'manga'}
                      />
                    )
                    }
                  />)
                  :
                  (<SearchResult
                    value={querySearch.value}
                    indexTab={indexTab}
                    type={'manga'}
                  />)
              }
            />
          </Content>
        </Container>
      </View>
    );
  }
}

export default Home