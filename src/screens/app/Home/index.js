
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
    try {
      const getGenresList = await getGenres();
      console.log(getGenresList, 'getGenresList')
      this.setState({
        categories: getGenresList.data.data,
        urlNextPage: getGenresList.data.links.next,
      })
    } catch (err) {
      console.log(err)
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
    let { indexTab, categories } = this.state;
    let { state } = this;
    state[key].value = value;
    this.setState({ ...state });
  };

  render() {
    let { isLoading, indexTab, querySearch } = this.state;
    console.log(querySearch.value === '' ? 'funca' : 'no funca')
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
                  (<FlatList
                    data={this.state.categories}
                    showsVerticalScrollIndicator={false}
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
                  />)
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