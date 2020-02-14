
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { Content, Container } from 'native-base';
import { getGenres } from '../../../api/home'
import { connect } from 'react-redux';
//customs
import styles from './styles';
import Category from '../../../components/Category'
import TopTabBar from '../../../components/HeaderTabs'
class Home extends Component {
  state = {
    loading: false,
    next_page_url: null,
    anime: [],
    categories: [],
  }
  componentDidMount = async () => {
    try {
      const getGenresList = await getGenres();
      console.log(getGenresList, 'getGenresList')
      this.setState({
        categories: getGenresList.data.data
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
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
                  renderItem={({ item, index }) => (
                    <Category
                      showCategoryName={<Text style={styles.categoryName}>{item.attributes.name}</Text>}
                      categoryName={item.attributes.slug}
                      type={'anime'}
                    />
                  )}
                />
              }
              contentTab2={
                <FlatList
                  data={this.state.categories}
                  showsVerticalScrollIndicator={false}
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