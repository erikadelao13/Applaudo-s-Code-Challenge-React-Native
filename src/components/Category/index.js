
import React, { Component } from 'react';
import { View, FlatList, TouchableHighlightBase, Text } from 'react-native';
import { getDataByCategory } from '../../api/home'
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
//customs
import styles from './styles';
import Card from '../../components/Card'
class Category extends Component {
  state = {
    loading: false,
    next_page_url: null,
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
  seeDetail = async index => {
    try {
      let { categoryList } = this.state;
      console.log(categoryList[index],'categoryListsdklfjsdlkf')
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
            renderItem={({ item, index }) => (
                <Card
                  onPressCard={() => this.seeDetail(index)}
                  averageRating={item.attributes.popularityRank !== null ? item.attributes.popularityRank : '--'}
                  picture={item.attributes.posterImage.original}
                  name={item.attributes.canonicalTitle}
                  numberOfEpisodes={type === 'manga' ? item.attributes.chapterCount : item.attributes.episodeCount}
                  minutesPerEpisode={type === 'manga' ? item.attributes.volumeCount : item.attributes.episodeLength}
                  mangaTypeActive={type === 'manga' ? true : false}
                />
            )}
          />
        </View>) : null
    );
  }
}

export default withNavigationFocus(Category)