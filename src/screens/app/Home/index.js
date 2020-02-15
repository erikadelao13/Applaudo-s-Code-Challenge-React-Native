
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { Content, Container } from 'native-base';
import { getGenres, showGenresByPage } from '../../../api/home'
import { connect } from 'react-redux';
//customs
import styles from './styles';
import Category from '../../../components/Category';
import TopTabBar from '../../../components/HeaderTabs';
class Home extends Component {
  state = {
    loading: false,
    urlNextPage: null,
    isLoading: false,
    categories: [],
  }
  componentDidMount = async () => {
    this.setState({
      isLoading: true
    })
    try {
      const getGenresList = await getGenres();
      console.log(getGenresList, 'getGenresList')
      this.setState({
        categories: getGenresList.data.data,
        urlNextPage: getGenresList.data.links.next,
      })
      this.setState({
        isLoading: false
      })
    } catch (err) {
      console.log(err)
      this.setState({
        isLoading: false
      })
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
  render() {
    let { isLoading } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Container style={styles.backgroundContainer}>
          <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.backgroundContent}>
            <TopTabBar
              contentTab1={
                <FlatList
                  data={this.state.categories}
                  showsVerticalScrollIndicator={false}
                  onEndReached={this.loadMoreData}
                  renderItem={({ item, index }) => (
                    item !== null ?
                      <Category
                        showCategoryName={<Text style={styles.categoryName}>{item.attributes.name}</Text>}
                        categoryName={item.attributes.slug}
                        type={'anime'}
                      />
                      : null
                  )}
                />
              }
              contentTab2={
                <FlatList
                  data={this.state.categories}
                  showsVerticalScrollIndicator={false}
                  onEndReached={this.loadMoreData}
                  renderItem={({ item, index }) => (
                    <Category
                      showCategoryName={<Text style={styles.categoryName}>{item.attributes.name}</Text>}
                      categoryName={item.attributes.slug}
                      type={'manga'}
                    />
                  )
                  }
                />
              }
            />
          </Content>
        </Container>
      </View>
    );
  }
}

export default Home