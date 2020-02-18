
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, RefreshControl } from 'react-native';
import { Content, Container } from 'native-base';
import { getGenres, showGenresByPage, searcher } from '../../../api/home'
import { connect } from 'react-redux';
//customs
import styles from './styles';
import FavoriteCard from '../../../components/FavoriteCard';
import NoImage from '../../../assets/images/NoImageAvailable.png';
import colors from '../../../utils/colors';
import TopTabBar from '../../../components/HeaderTabs';
import Header from '../../../components/Header';
import SearchResult from '../Home/SearchResult';
import Loading from '../../../components/LoadingSpinner';
class Favorites extends Component {
    state = {
        urlNextPage: null,
        isLoading: false,
        querySearch: {
            value: '',
            type: 'text',
            required: 'false'
        },
        isLoadingNext: false,
        favorites: [],
        refreshing: false,
    }

    componentDidMount = () => {
        this.getFavorites();
    }
    getFavorites = () => {
        this.setState({
            refreshing: true
        })
        let { favorites } = this.props;
        let removeduplicated = [...new Set(favorites)]
        this.setState({
            favorites: removeduplicated
        })
        this.setState({
            refreshing: false
        })
    };

    imageExists = image => {
        if (image && Reflect.has(image, 'original')) {
            return { uri: image.original };
        } else {
            return NoImage;
        }
    };

    seeDetail = async index => {
        try {
            let { favorites } = this.state;
            let cardId = favorites[index].id;
            categoryList.id = cardId;
            this.setState({ favorites }, () => {
                this.props.navigation.navigate('Detail', {
                    cardInformation: this.state.favorites[index],
                });
            });
        } catch (err) {
            console.log(err);
        }
    };

    goBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        let { favorites, refreshing } = this.state;
        console.log(favorites, 'favoritesList')
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor='transparent' />
                <Header
                    normalHeader={true}
                    title={'Favorites'}
                    onChangeValue={this.onChangeInputValue}
                    onPress={() => this.goBack()}
                />
                <Container style={styles.backgroundContainer}>
                    <Content
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.backgroundContent}
                        refreshControl={<RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => this.getFavorites()}
                        />}
                    >
                        <View>
                            <Text style={styles.title}>{favorites.length > 0 ? 'Favorites' : 'No Favorites'}</Text>
                            <FlatList
                                keyExtractor={i => i.id}
                                data={favorites}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <FavoriteCard
                                        picture={this.imageExists(item.attributes.posterImage)}
                                        animeName={item.attributes.canonicalTitle}
                                        onPress={() => this.seeDetail(index)}
                                    />)
                                }
                            />
                        </View>
                    </Content>
                </Container>
            </View >
        );
    }
}
const mapStateToProps = state => ({
    favorites: state.favorites.favorites,
});

export default connect(mapStateToProps)(Favorites);