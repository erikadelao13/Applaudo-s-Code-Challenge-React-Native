
import React, { Component } from 'react';
import { View, FlatList, TouchableHighlightBase, Text } from 'react-native';
import { getDataByCategory, showDataByCategoryPage, searcher } from '../../../../api/home'
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
//customs
import styles from './styles';
import Card from '../../../../components/Card';
import Loading from '../../../../components/LoadingSpinner';
class Category extends Component {
  state = {
    isLoading: false,
    isLoadingNext: false,
    urlNextPage: null,
    categoryList: [],
    showCategoryName: false,
  }

  componentDidMount = async () => {
    this.getCategoryList();
  };

  getCategoryList = async () => {
    this.setState({
      isLoading: true
    });
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
      this.setState({
        isLoading: false
      });
    } catch (err) {
      console.log(err)
      this.setState({
        isLoading: false
      });
    }
  };

  loadMoreData = async () => {
    this.setState({
      isLoadingNext: true
    })
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
      this.setState({
        isLoadingNext: false,
      })
    } catch (err) {
      console.log(err)
      this.setState({
        isLoadingNext: false
      })
    }
  };

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
  };

  imageExists = image => {
    if (image && Reflect.has(image, 'original')) {
      return image.original;
    } else {
      return null;
    }
  };

  render() {
    let { showCategoryName, categoryList, isLoadingNext } = this.state;
    let { categoryName, type } = this.props;
    return (
      <View style={styles.container}>
        {showCategoryName ? (
          this.props.showCategoryName
        ) :
          (null)}
        <FlatList
          data={categoryList}
          horizontal
          onEndReachedThreshold={0.5}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          showsHorizontalScrollIndicator={false}
          onEndReached={this.loadMoreData}
          ListFooterComponent={
            <>
              {isLoadingNext && (
                <Loading color={'#8055E3'} />
              )}
            </>
          }
          renderItem={({ item, index }) => (
            item !== null ?
              <Card
                cardForSearch={false}
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
      </View>
    );
  }
}

export default withNavigationFocus(Category)