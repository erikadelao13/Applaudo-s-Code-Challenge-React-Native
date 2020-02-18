import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles'
class NavBarBottom extends Component {
    async navigateTo(path) {
        this.props.navigation.navigate(path);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.navigateTo('Home')}>
                    <Icon name="home" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigateTo('Favorites')}>
                    <Icon name="heart" />
                </TouchableOpacity>

            </View>
        );
    }
}
export default NavBarBottom