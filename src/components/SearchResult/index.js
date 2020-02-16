import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content } from 'native-base';
import { searcher, searcherByPage } from '../../api/home';
import styles from './styles';
import { withNavigationFocus } from 'react-navigation';
//customs
import Card from '../Card'
class SearchResult extends Component {
    state = {
        loading: false,
        urlNextPage: null,
        searchList: [],
    }

    componentDidMount = async () => {
        this.searchResults();
    };

    componentDidUpdate = async (prevProps) => {
        if (prevProps.value !== this.props.value) {
            this.searchResults();
        }
    };

    searchResults = async () => {
        let { searchList, urlNextPage } = this.state;
        try {
            if (this.props.value !== '') {
                let searchByText = await searcher(this.props.indexTab === 0 ? 'anime' : 'manga', this.props.value)
                this.setState({
                    searchList: searchByText.data.data,
                    urlNextPage: searchByText.data.links.next,
                })
            }
        } catch (err) {
            console.log(err)    
        }
    };

    loadMoreData = async () => {
        try {
            let { urlNextPage, searchList } = this.state;
            if (urlNextPage) {
                let interArray = [...searchList];
                let response = await searcherByPage(urlNextPage);
                let nextArray = [...interArray, ...response.data.data];
                this.setState({
                    searchList: nextArray,
                    urlNextPage: response.data.links.next,
                });
            }
        } catch (err) {
            console.log(err)
        }
    };

    imageExists = image => {
        if (image && Reflect.has(image, 'original')) {
            return image.original;
        } else {
            return null;
        }
    };

    seeDetail = async index => {
        try {
            let { searchList } = this.state;
            let cardId = searchList[index].id;
            searchList.id = cardId;
            this.setState({ searchList }, () => {
                this.props.navigation.navigate('Detail', {
                    cardInformation: this.state.searchList[index],
                });
            });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        let { searchList } = this.state;
        let { type } = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    data={searchList}
                    showsVerticalScrollIndicator={false}
                    onEndReached={this.loadMoreData}
                    numColumns={2}
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
            </View>
        );
    }
}
export default withNavigationFocus(SearchResult)