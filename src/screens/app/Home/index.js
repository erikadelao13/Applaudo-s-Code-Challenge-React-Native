
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { Content, Container } from 'native-base';
import { getGenres, showGenresByPage } from '../../../api/home'
import { connect } from 'react-redux';
//customs
import styles from './styles';
import colors from '../../../utils/colors';
import { parseError } from '../../../utils/parse_error';
import Category from './Category';
import TopTabBar from '../../../components/HeaderTabs';
import Header from '../../../components/Header';
import SearchResult from './SearchResult';
import Loading from '../../../components/LoadingSpinner';
class Home extends Component {
  state = {
    urlNextPage: null,
    isLoading: false,
    categories: [],
    indexTab: 0,
    querySearch: {
      value: '',
      type: 'text',
      required: 'false'
    },
    isLoadingNext: false,
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
      return parseError(err);
    }
  };

  loadMoreData = async () => {
    this.setState({
      isLoadingNext: true
    })
    try {
      let { urlNextPage, categories, isLoadingNext } = this.state;
      if (urlNextPage) {
        let interArray = [...categories];
        let response = await showGenresByPage(urlNextPage);
        let nextArray = [...interArray, ...response.data.data];
        this.setState({
          categories: nextArray,
          urlNextPage: response.data.links.next,
        });
      }
      this.setState({
        isLoadingNext: false,
      })
    } catch (err) {
      console.log(err);
      this.setState({
        isLoadingNext: false
      });
      return parseError(err);
    }
  };

  onChangeInputValue = async (key, value) => {
    let { state } = this;
    state[key].value = value;
    state[key].value = state[key].value.replace(/\s{2,}/g, ' ').trimLeft();
    this.setState({ ...state });
  };

  render() {
    let { isLoading, isLoadingNext, indexTab, querySearch, categories } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor='transparent' />
        <Header
          headerWithSearch={true}
          stateInput="querySearch"
          textValue={querySearch.value}
          onChangeValue={this.onChangeInputValue}
        />
        <Container style={styles.backgroundContainer}>
          <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.backgroundContent}>
            <TopTabBar
              contentTab1={
                querySearch.value === '' ?
                  (
                    !isLoading ?
                      <FlatList
                        keyExtractor={i => i.id}
                        data={categories}
                        // onRefresh={() => this.getCategories()}
                        onEndReached={this.loadMoreData}
                        onEndReachedThreshold={0.5}
                        initialNumToRender={5}
                        maxToRenderPerBatch={3}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={
                          <>
                            {isLoadingNext && (
                              <Loading color={'#8055E3'} />
                            )}
                          </>
                        }
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
                  (!isLoading ?
                    <FlatList
                      keyExtractor={i => i.id}
                      data={categories}
                      onEndReached={this.loadMoreData}
                      onEndReachedThreshold={0.5}
                      initialNumToRender={5}
                      maxToRenderPerBatch={3}
                      showsVerticalScrollIndicator={false}
                      ListFooterComponent={
                        <>
                          {isLoadingNext && (
                            <Loading color={'#8055E3'} />
                          )}
                        </>
                      }
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
                    />
                    :
                    <Loading color={'#8055E3'} />
                  )
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