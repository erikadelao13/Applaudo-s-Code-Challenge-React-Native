
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { Content, Container } from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';
import { getSeriesEpisodes, getEpisodesByPage } from '../../../api/home';
//customs
import DetailComponent from '../../../components/DetailCard';
import FooterScrollableTab from '../../../components/FooterScrollableTab';
import GeneralDetails from '../../../components/GeneralDetails';
import TechnicalDetails from '../../../components/TechnicalDetails';
import EpisodesCard from '../../../components/EpisodesCard';
class Detail extends Component {
  state = {
    loading: false,
    cardInformation: this.props.navigation.getParam('cardInformation', []),
    episodes: [],
    urlNextPage: null,
    isLoadingNext: false
  }
  componentDidMount = async () => {
    try {
      this.getEpisodesOfSeries();
    } catch (err) {
      console.log(err)
    }
  }

  getEpisodesOfSeries = async () => {
    let { cardInformation } = this.state;
    try {
      let getEpisodes = await getSeriesEpisodes(cardInformation.type, cardInformation.id);
      this.setState({
        episodes: getEpisodes.data.data,
        urlNextPage: getEpisodes.data.links.next,

      })
      console.log(getEpisodes, 'getEpisodes')
    } catch (err) {
      console.log(err);
    }
  };

  loadMoreData = async () => {
    this.setState({
      isLoadingNext: true
    })
    try {
      let { urlNextPage, episodes, isLoadingNext } = this.state;
      if (urlNextPage) {
        let interArray = [...episodes];
        let response = await getEpisodesByPage(urlNextPage);
        let nextArray = [...interArray, ...response.data.data];
        this.setState({
          episodes: nextArray,
          urlNextPage: response.data.links.next,
          isLoadingNext: false,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        isLoadingNext: false
      });
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
    let { cardInformation, episodes } = this.state;
    console.log(cardInformation, 'cardInformationdskfjsldk')
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Container style={styles.backgroundContainer}>
          <Content showsVerticalScrollIndicator={false}>
            <DetailComponent
              name={cardInformation.attributes.canonicalTitle}
              picture={this.imageExists(cardInformation.attributes.posterImage)}
              mainPicture={cardInformation.attributes.posterImage.large}
              numberOfEpisodes={cardInformation.type === 'manga' ? cardInformation.attributes.chapterCount : cardInformation.attributes.episodeCount}
              minutesPerEpisode={cardInformation.type === 'manga' ? cardInformation.attributes.volumeCount : cardInformation.attributes.episodeLength}
              mangaTypeActive={cardInformation.type === 'manga' ? true : false}
              averageRating={cardInformation.attributes.averageRating === null || cardInformation.attributes.averageRating === '' ? '--' : cardInformation.attributes.averageRating}
            />
            <FooterScrollableTab
              contentTab1={
                <GeneralDetails
                  synopsis={cardInformation.attributes.synopsis === '' || cardInformation.attributes.synopsis === null ? 'None' : cardInformation.attributes.synopsis}
                />}
              contentTab2={
                <TechnicalDetails
                  ageRating={cardInformation.attributes.ageRating === null || cardInformation.attributes.ageRating === '' ? 'None' : cardInformation.attributes.ageRating}
                  ageRatingGuide={cardInformation.attributes.ageRatingGuide === null || cardInformation.attributes.ageRatingGuide === '' ? 'None' : cardInformation.attributes.ageRatingGuide}
                  showType={cardInformation.attributes.showType}
                  startDate={cardInformation.attributes.startDate}
                  endDate={cardInformation.attributes.endDate}
                  status={cardInformation.attributes.status}
                />}
            />
            <View>
              <Text style={styles.title}>Episodes</Text>
              <FlatList
                keyExtractor={i => i.id}
                data={episodes}
                onEndReached={this.loadMoreData}
                onEndReachedThreshold={0.5}
                // initialNumToRender={5}
                maxToRenderPerBatch={3}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <EpisodesCard
                    picture={this.imageExists(item.attributes.thumbnail)}
                    episodeName={item.attributes.canonicalTitle}
                    season={item.attributes.seasonNumber}
                    episode={item.attributes.number}
                    // description={item.attributes.synopsis}
                    airingDate={item.attributes.airdate}
                  />
                )
                }
              />
            </View>
          </Content>
        </Container>
      </View>
    );
  }
}

export default Detail