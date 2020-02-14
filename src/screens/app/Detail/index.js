
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { Content, Container } from 'native-base';
import { connect } from 'react-redux';
//customs
import DetailComponent from '../../../components/DetailCard';
import styles from './styles';
class Detail extends Component {
  state = {
    loading: false,
    anime: [],
    categories: [],
    cardInformation: this.props.navigation.getParam('cardInformation', []),
  }
  componentDidMount = async () => {
    try {
      console.log(this.state.cardInformation, 'this.state.cardInformation')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    let { cardInformation } = this.state;
    console.log(cardInformation, 'cardInformationdskfjsldk')
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Container style={styles.backgroundContainer}>
          <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.backgroundContent}>
            <DetailComponent
              name={cardInformation.attributes.canonicalTitle}
              picture={cardInformation.attributes.posterImage.original}
              mainPicture={cardInformation.attributes.posterImage.large}
              numberOfEpisodes={cardInformation.type === 'manga' ? cardInformation.attributes.chapterCount : cardInformation.attributes.episodeCount}
              minutesPerEpisode={cardInformation.type === 'manga' ? cardInformation.attributes.volumeCount : cardInformation.attributes.episodeLength}
              mangaTypeActive={cardInformation.type === 'manga' ? true : false}
              averageRating={cardInformation.attributes.averageRating === null || cardInformation.attributes.averageRating === '' ? '--' : cardInformation.attributes.averageRating}
              synopsis={cardInformation.attributes.synopsis === '' || cardInformation.attributes.synopsis === null ? 'None' : cardInformation.attributes.synopsis}
              ageRating={cardInformation.attributes.ageRating === null || cardInformation.attributes.ageRating === '' ? 'None' : cardInformation.attributes.ageRating}
              ageRatingGuide={cardInformation.attributes.ageRatingGuide === null || cardInformation.attributes.ageRatingGuide === '' ? 'None' : cardInformation.attributes.ageRatingGuide}
              showType={cardInformation.attributes.showType}
              startDate={cardInformation.attributes.startDate}
              endDate={cardInformation.attributes.endDate}
              status={cardInformation.attributes.status}
            />
          </Content>
        </Container>
      </View>
    );
  }
}

export default Detail