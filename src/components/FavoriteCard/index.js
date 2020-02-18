import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail, Content, Container } from 'native-base';
import styles from './styles';
const FavoriteCard = (props) => {
    return (
        <View style={styles.container}>
            <View styles={styles.imageContainer}>
                <Thumbnail style={styles.thumbnailStyle} square large source={props.picture} />
            </View>
            <View style={styles.details}>
                <Text style={styles.animeName}>{props.animeName}</Text>
            </View>
        </View>
    );
}
export default FavoriteCard