
import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { Content, Container } from 'native-base';
import { getGenres, showGenresByPage, searcher } from '../../../api/home'
import { connect } from 'react-redux';
//customs
import styles from './styles';
import colors from '../../../utils/colors';
import TopTabBar from '../../../components/HeaderTabs';
import Header from '../../../components/Header';
import SearchResult from '../Home/SearchResult';
import Loading from '../../../components/LoadingSpinner';
class Favorites extends Component {
    state = {
        urlNextPage: null,
        isLoading: false,
        categories: [],
        indexTab: 0,
        querySearch: {
            value: '',
            type: 'text',
            required: 'false'
        },
        isLoadingNext: false,
    }
    // componentDidMount = async () => {
    //     this.getCategories();
    // };

    // getCategories = async (isRefresh = false) => {
    //     this.setState({
    //         isLoading: true
    //     });
    //     try {
    //         const getGenresList = await getGenres();
    //         console.log(getGenresList, 'getGenresList')
    //         this.setState({
    //             categories: getGenresList.data.data,
    //             urlNextPage: getGenresList.data.links.next,
    //             isLoading: false,
    //         })
    //     } catch (err) {
    //         console.log(err)
    //         this.setState({
    //             isLoading: false
    //         });
    //     }
    // };

    // loadMoreData = async () => {
    //     this.setState({
    //         isLoadingNext: true
    //     })
    //     try {
    //         let { urlNextPage, categories, isLoadingNext } = this.state;
    //         if (urlNextPage) {
    //             let interArray = [...categories];
    //             let response = await showGenresByPage(urlNextPage);
    //             let nextArray = [...interArray, ...response.data.data];
    //             this.setState({
    //                 categories: nextArray,
    //                 urlNextPage: response.data.links.next,
    //             });
    //         }
    //         this.setState({
    //             isLoadingNext: false,
    //         })
    //     } catch (err) {
    //         console.log(err);
    //         this.setState({
    //             isLoadingNext: false
    //         });
    //     }
    // };

    onChangeInputValue = async (key, value) => {
        let { state } = this;
        state[key].value = value;
        state[key].value = state[key].value.replace(/\s{2,}/g, ' ').trimLeft();
        this.setState({ ...state });
    };

    render() {
        let { } = this.state;
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
                    <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.backgroundContent}>

                    </Content>
                </Container>
            </View>
        );
    }
}

export default Favorites