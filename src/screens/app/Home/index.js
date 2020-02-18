
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { Content, Container } from 'native-base';
import NetInfo from '@react-native-community/netinfo';
import { getGenres, showGenresByPage } from '../../../api/home';
//customs
import styles from './styles';
import parseError from '../../../utils/parse_error';
import Category from './Category';
import TopTabBar from '../../../components/HeaderTabs';
import Header from '../../../components/Header';
import SearchResult from './SearchResult';
import Loading from '../../../components/LoadingSpinner';
import ErrorScreen from '../../../components/ErrorConnection';
class Home extends Component {
  state = {
    urlNextPage: null,
    isLoading: false,
    categories: [],
    querySearch: {
      value: '',
      type: 'text',
      required: false
    },
    isLoadingNext: false,
    thereIsConnection: true,
    refreshing: false,
  }

  componentDidMount = async () => {
    this.checkConnection();
    this.getCategories();
  };

  checkConnection = async () => {
    try {
      const verifyConnection = await NetInfo.fetch();
      if (verifyConnection) {
        serverConnection = await fetch('https://kitsu.io/api/edge/categories');
        if (serverConnection) {
          this.setState({
            thereIsConnection: true
          })
        }
      }
    } catch (err) {
      console.log(err)
      this.setState({
        thereIsConnection: false
      })
    }
  };

  getCategories = async () => {
    this.setState({
      isLoading: true
    });
    try {
      this.setState({
        refreshing: true,
      })
      this.checkConnection()
      const getGenresList = await getGenres();
      this.setState({
        categories: getGenresList.data.data,
        urlNextPage: getGenresList.data.links.next,
        isLoading: false,
        thereIsConnection: true,
        refreshing: false,
      })
    } catch (err) {
      console.log(err)
      this.setState({
        isLoading: false,
        thereIsConnection: false
      });
      // return parseError(err);
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
      // return parseError(err);
    }
  };

  onChangeInputValue = async (key, value) => {
    let { state } = this;
    state[key].value = value;
    state[key].value = state[key].value.replace(/\s{2,}/g, ' ').trimLeft();
    this.setState({ ...state });
  };

  render() {
    let { isLoading, isLoadingNext, querySearch, categories, thereIsConnection, refreshing } = this.state;
    return (
      <React.Fragment>
        {thereIsConnection ?
          (<View style={styles.container}>
            <StatusBar translucent barStyle={'dark-content'} backgroundColor='transparent' />
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
                            onEndReached={this.loadMoreData}
                            onEndReachedThreshold={0.5}
                            initialNumToRender={5}
                            maxToRenderPerBatch={3}
                            showsVerticalScrollIndicator={false}
                            refreshing={refreshing}
                            onRefresh={() => this.getCategories()}
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
                                  showCategoryName={<Text style={styles.categoryName}>{item.attributes.name}</Text>}
                                  categoryName={item.attributes.slug}
                                  type={'anime'}
                                />
                                : null
                            )}
                          />
                          :
                          <Loading color={'#8055E3'} />
                      ) : (
                        <SearchResult
                          value={querySearch.value}
                          type={'anime'}
                        />
                      )}
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
                              showCategoryName={<Text style={styles.categoryName}>{item.attributes.name}</Text>}
                              categoryName={item.attributes.slug}
                              type={'manga'}
                            />
                          )
                          }
                        />
                        :
                        <Loading color={'#8055E3'} />
                      ) : (
                        <SearchResult
                          value={querySearch.value}
                          type={'manga'}
                        />
                      )}
                />
              </Content>
            </Container>
          </View>) : (
            <ErrorScreen
              onPress={() => this.getCategories()}
            />
          )}
      </React.Fragment>
    );
  }
}

export default Home