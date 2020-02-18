
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, RefreshControl } from 'react-native';
import { Content, Container } from 'native-base';
import { connect } from 'react-redux';
//customs
import styles from './styles';
import FavoriteCard from '../../../components/FavoriteCard';
import NoImage from '../../../assets/images/NoImageAvailable.png';
import Header from '../../../components/Header';
let favoritesArray
class Favorites extends Component {
    state = {
        isLoading: false,
        favorites: [],
        refreshing: false,
    }

    componentDidMount = () => {
        this.getFavorites();
    };

    getFavorites = () => {
        this.setState({
            refreshing: true
        })
        let { favorites } = this.props;
        let removeduplicated = [...new Set(favorites)]
        this.setState({
            favorites: removeduplicated,
            refreshing: false
        })
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
            let { favorites } = this.state;
            let cardId = favorites[index].id;
            favorites.id = cardId;
            this.setState({ favorites }, () => {
                this.props.navigation.navigate('Detail', {
                    cardInformation: favorites[index],
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
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor='transparent' />
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
                        refreshControl={favorites.length === 0 ? <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => this.getFavorites()}
                        /> : null}
                    >
                        <View style={styles.flatListView}>
                            <Text style={styles.title}>{favorites.length > 0 ? 'Favorites' : 'No Favorites'}</Text>
                            <FlatList
                                keyExtractor={i => i.id}
                                data={favorites}
                                refreshing={refreshing}
                                onRefresh={() => this.getFavorites()}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <FavoriteCard
                                        picture={this.imageExists(item.attributes.posterImage)}
                                        animeName={item.attributes.canonicalTitle}
                                        onPress={() => this.seeDetail(index)}
                                        typeSeries={item.type}
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