
import React, { Component } from 'react';
import { View, FlatList, TouchableHighlightBase, Text } from 'react-native';
import { getDataByCategory, showDataByCategoryPage } from '../../api/home'
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
//customs
import styles from './styles';
import Card from '../../components/Card';
class Category extends Component {
  state = {
    loading: false,
    urlNextPage: null,
    categoryList: [],
    showCategoryName: false,
  }
  componentDidMount = async () => {
    try {
      const getDatabyCategoryList = await getDataByCategory(this.props.type, this.props.categoryName);
      console.log(getDatabyCategoryList, 'getDatabyCategoryList')
      if (getDatabyCategoryList.data.data.length !== 0) {
        this.setState({
          categoryList: getDatabyCategoryList.data.data,
          showCategoryName: true,
          urlNextPage: getDatabyCategoryList.data.links.next,
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
  loadMoreData = async () => {
    try {
      let { urlNextPage, categoryList } = this.state;
      if (urlNextPage) {
        let interArray = [...categoryList];
        let response = await showDataByCategoryPage(urlNextPage);
        let nextArray = [...interArray, ...response.data.data];
        this.setState({
          categoryList: nextArray,
          urlNextPage: response.data.links.next,
        });
      }
    } catch (err) {
      console.log(err)
    }
  }
  seeDetail = async index => {
    try {
      let { categoryList } = this.state;
      let cardId = categoryList[index].id;
      categoryList.id = cardId;
      this.setState({ categoryList }, () => {
        this.props.navigation.navigate('Detail', {
          cardInformation: this.state.categoryList[index],
        });
      });
    } catch (err) {
      console.log(err);
    }
  }
  imageExists = image => {
    if (image && Reflect.has(image, 'original')) {
      return image.original;
    } else {
      return null;
    }
  }
  render() {
    let { showCategoryName, categoryList } = this.state;
    let { categoryName, type } = this.props;
    return (
      showCategoryName ?
        (<View style={styles.container}>
          {showCategoryName ? (
            this.props.showCategoryName
          ) :
            (null)}
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            onEndReached={this.loadMoreData}
            renderItem={({ item, index }) => (
              item !== null ?
                <Card
                  onPressCard={() => this.seeDetail(index)}
                  averageRating={item.attributes.popularityRank !== null ? item.attributes.popularityRank : '--'}
                  picture={this.imageExists(item.attributes.posterImage)}
                  name={item.attributes.canonicalTitle}
                  numberOfEpisodes={type === 'manga' ? item.attributes.chapterCount : item.attributes.episodeCount}
                  minutesPerEpisode={type === 'manga' ? item.attributes.volumeCount : item.attributes.episodeLength}
                  mangaTypeActive={type === 'manga' ? true : false}
                />
                : null
            )}
          />
        </View>) : null
    );
  }
}

export default withNavigationFocus(Category)