
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { Content, Container } from 'native-base';
import { getCategories } from '../../../api/home'
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
      const getCategoryList = await getCategories();
      console.log(getCategoryList, 'getCategoryList')
      this.setState({
        categories: getCategoryList.data.data
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
                    <View>
                      <Text style={styles.categoryName}>{item.attributes.title}</Text>
                      <Category
                        categoryName={item.attributes.title}
                        type={'anime'}
                      />
                    </View>
                  )
                  }
                />
              }
              contentTab2={
                <FlatList
                  data={this.state.categories}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <View>
                      <Text style={styles.categoryName}>{item.attributes.title}</Text>
                      <Category
                        categoryName={item.attributes.title}
                        type={'manga'}
                      />
                    </View>
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