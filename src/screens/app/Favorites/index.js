
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
    onChangeInputValue = async (key, value) => {
        let { state } = this;
        state[key].value = value;
        state[key].value = state[key].value.replace(/\s{2,}/g, ' ').trimLeft();
        this.setState({ ...state });
    };

    imageExists = image => {
        if (image && Reflect.has(image, 'original')) {
            return { uri: image.original };
        } else {
            return NoImage;
        }
    };

    render() {
        let { favorites, refreshing } = this.state;
        console.log(favorites, 'favoritesList')
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor='transparent' />
                <Header
                    headerWithSearch={true}
                    // stateInput="querySearch"
                    // textValue={querySearch.value}
                    onChangeValue={this.onChangeInputValue}
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