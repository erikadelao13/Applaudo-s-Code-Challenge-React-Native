
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { Content, Container } from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';
import colors from '../../../utils/colors';
import { getSeriesEpisodes, getEpisodesByPage } from '../../../api/home';
import YouTube from 'react-native-youtube';
import { withNavigationFocus } from 'react-navigation';
//redux
import { SET_TO_FAVORITES, DELETE_FROM_FAVORITES } from '../../../actions/favorites';
//customs
import DetailComponent from '../../../components/DetailCard';
import FooterScrollableTab from '../../../components/FooterScrollableTab';
import GeneralDetails from '../../../components/GeneralDetails';
import TechnicalDetails from '../../../components/TechnicalDetails';
import EpisodesCard from '../../../components/EpisodesCard';
import Loading from '../../../components/LoadingSpinner';
import CustomModal from '../../../components/Modal';
import NoImage from '../../../assets/images/NoImageAvailable.png';
class Detail extends Component {
  state = {
    loading: false,
    cardInformation: this.props.navigation.getParam('cardInformation', []),
    episodes: [],
    urlNextPage: null,
    isLoadingNext: false,
    modalState: false,
    titleState: '',
    subtitleState: '',
    isReady: false,
    status: null,
    isPlaying: true,
  }
  _youTubeRef = React.createRef();

  componentDidMount = async () => {
    let { cardInformation } = this.state;
    try {
      if (cardInformation.type === 'anime') {
        this.verifyFavorite(cardInformation);
        this.getEpisodesOfSeries();
      }
    } catch (err) {
      console.log(err)
    }
  };

  verifyFavorite = (cardInfo) => {
    let { favorites } = this.props;
    let isFavorite = false;
    isFavorite = favorites.length && favorites.some(fav => fav.id == cardInfo.id);
    this.setState({
      isFavorite
    })
  }

  getEpisodesOfSeries = async () => {
    let { cardInformation } = this.state;
    try {
      let getEpisodes = await getSeriesEpisodes(cardInformation.type, cardInformation.id);
      this.setState({
        episodes: getEpisodes.data.data,
        urlNextPage: getEpisodes.data.links.next,
      })
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
        });
      }
      this.setState({
        isLoadingNext: false
      });
    } catch (err) {
      console.log(err);
      this.setState({
        isLoadingNext: false
      });
    }
  };

  imageExists = image => {
    if (image && Reflect.has(image, 'original')) {
      return { uri: image.original };
    } else {
      return NoImage;
    }
  };

  showModal = (modal, title, subtitle) => {
    this.setState({
      modalState: modal,
      titleState: title,
      subtitleState: subtitle,
      isReady: true
    });
  };

  onPressVideo = () => {
    let { cardInformation } = this.state;
    cardInformation.attributes.youtubeVideoId ?
      this.showModal(false)
      :
      this.showModal(true, 'Sorry', 'No video available.')
  };

  setToFavorites = async anime => {
    const { dispatch, favorites } = this.props;
    favorites.push(anime);
    dispatch({
      type: SET_TO_FAVORITES,
      payload: [...favorites],
    });
    this.setState({ isFavorite: true });
  };

  deleteFromFavorites = async item => {
    const { dispatch, favorites } = this.props;
    const removeFromFavorites = favorites.filter(fav => fav.id != item.id);
    dispatch({
      type: DELETE_FROM_FAVORITES,
      payload: removeFromFavorites,
    });
    this.setState({ isFavorite: false });
  };

  render() {
    let { cardInformation, episodes, isLoadingNext, isReady, isPlaying, modalState, titleState, subtitleState, isFavorite } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar translucent barStyle={'light-content'} backgroundColor={colors.lightPurple} />
        <Container style={styles.backgroundContainer}>
          <Content showsVerticalScrollIndicator={false}>
            <DetailComponent
              onPress={() => this.onPressVideo()}
              onPLayVideo={cardInformation.attributes.youtubeVideoId ? isReady : false}
              name={cardInformation.attributes.canonicalTitle}
              picture={this.imageExists(cardInformation.attributes.posterImage)}
              youtubeVideo={<YouTube
                ref={this._youTubeRef}
                apiKey={"AIzaSyBOJCZo6sFEM1u7zExOSXN6_BMAaqS0yXg"}
                videoId={cardInformation.attributes.youtubeVideoId && cardInformation.attributes.youtubeVideoId}
                play={isPlaying}
                controls={1}
                style={styles.youtubeVideoStyle}
                onError={e => {
                  console.log(e)
                }}
                onReady={e => {
                  this.setState({ isReady: true })
                }}
                onChangeState={e => {
                  this.setState({ status: e.state });
                }}
              />}
              mainPicture={this.imageExists(cardInformation.attributes.posterImage)}
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
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={!isFavorite ? () => this.setToFavorites(cardInformation) : () => this.deleteFromFavorites(cardInformation)}>
                <View style={styles.favoritesButton}>
                  <Text style={styles.favoriteButtonText}>{!isFavorite ? 'Add to favorites' : 'Delete from Favorites'}</Text>
                </View>
              </TouchableOpacity>
            </View>
            {cardInformation.type === 'anime' && (
              <View>
                <Text style={styles.title}>Episodes</Text>
                <FlatList
                  keyExtractor={i => i.id}
                  data={episodes}
                  onEndReached={this.loadMoreData}
                  onEndReachedThreshold={0.5}
                  maxToRenderPerBatch={3}
                  ListFooterComponent={
                    <>
                      {isLoadingNext && (
                        <Loading color={'#8055E3'} />
                      )}
                    </>
                  }
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item, index }) => {
                    if (item.attributes.canonicalTitle) {
                      return <EpisodesCard
                        picture={this.imageExists(item.attributes.thumbnail)}
                        episodeName={item.attributes.canonicalTitle}
                        season={item.attributes.seasonNumber}
                        episode={item.attributes.number}
                        airingDate={item.attributes.airdate}
                      />;
                    }
                    else if (index === 0) {
                      return <Text style={styles.title}>--</Text>
                    }
                  }
                  }
                />
              </View>)}
          </Content>
          <CustomModal
            show={modalState}
            title={titleState}
            subtitle={subtitleState}
            onPress={() => this.showModal(false)}
            buttonText={'Accept'}
            onTapOutside={() => this.showModal(false)}
          />
        </Container>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  favorites: state.favorites.favorites,
});
export default connect(mapStateToProps)(withNavigationFocus(Detail));