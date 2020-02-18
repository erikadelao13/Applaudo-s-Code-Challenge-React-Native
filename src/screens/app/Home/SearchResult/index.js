import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { searcher, searcherByPage } from '../../../../api/home';
import styles from './styles';
import { withNavigationFocus } from 'react-navigation';
//customs
import parseError from '../../../../utils/parse_error';
import Card from '../../../../components/Card';
import Loading from '../../../../components/LoadingSpinner';
import NoImage from '../../../../assets/images/NoImageAvailable.png';
class SearchResult extends Component {
    state = {
        isLoading: false,
        urlNextPage: null,
        searchList: [],
        isLoadingNext: false,
    }

    componentDidUpdate = async (prevProps) => {
        if (prevProps.value !== this.props.value) {
            this.searchResults();
        }
    };

    searchResults = async () => {
        let { type } = this.props;
        this.setState({
            isLoading: true
        })
        try {
            if (this.props.value !== '') {
                let searchByText = await searcher(type, this.props.value)
                this.setState({
                    searchList: searchByText.data.data,
                    urlNextPage: searchByText.data.links.next,
                })
            }
            this.setState({
                isLoading: false
            })
        } catch (err) {
            console.log(err)
            this.setState({
                isLoading: false
            });
            // return parseError(err);
        }
    };

    loadMoreData = async () => {
        this.setState({
            isLoadingNext: true
        })
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
            this.setState({
                isLoadingNext: false
            })
        } catch (err) {
            console.log(err)
            this.setState({
                isLoadingNext: false
            });
            // return parseError(err);
        }
    };

    imageExists = image => {
        if (image && Reflect.has(image, 'small')) {
            return { uri: image.small };
        } else {
            return NoImage;
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
        let { searchList, isLoadingNext, isLoading } = this.state;
        let { type } = this.props;
        return (
            !isLoading ?
                (<View style={styles.container}>
                    <FlatList
                        data={searchList}
                        showsVerticalScrollIndicator={false}
                        onEndReachedThreshold={0.5}
                        maxToRenderPerBatch={3}
                        onEndReached={this.loadMoreData}
                        numColumns={2}
                        ListEmptyComponent={
                            isLoading ? (
                                <Loading color={'#8055E3'} />
                            ) : (
                                    <Text style={styles.emptyStateText}>No data</Text>
                                )
                        }
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
                </View>)
                :
                (<Loading color={'#8055E3'} />)
        );
    }
}
export default withNavigationFocus(SearchResult)