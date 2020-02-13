
import React, { Component } from 'react';
import { View, FlatList, TouchableHighlightBase, Text } from 'react-native';
import { getDataByCategory } from '../../api/home'
import { connect } from 'react-redux';
//customs
import styles from './styles';
import Card from '../../components/Card'
class Category extends Component {
  state = {
    loading: false,
    next_page_url: null,
    categoryList: [],
    showCategoryName: false
  }
  componentDidMount = async () => {
    try {
      const getDatabyCategoryList = await getDataByCategory(this.props.type, this.props.categoryName);
      console.log(getDatabyCategoryList, 'getDatabyCategoryList')
      if (getDatabyCategoryList.data.data.length !== 0) {
        this.setState({
          categoryList: getDatabyCategoryList.data.data,
          showCategoryName: true,
        })
      } else {
        this.setState({
          showCategoryName: false,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    let { showCategoryName, categoryList } = this.state;
    let { categoryName, type } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={categoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View>
              {showCategoryName ? (
                this.props.showCategoryName
              ) :
                (null)}
              <Card
                averageRating={item.attributes.averageRating !== null ? item.attributes.averageRating : '--'}
                picture={item.attributes.posterImage.original}
                name={item.attributes.canonicalTitle}
                numberOfEpisodes={item.attributes.episodeCount}
                minutesPerEpisode={item.attributes.episodeLength}
              />
            </View>
          )
          }
        />
      </View>
    );
  }
}

export default Category