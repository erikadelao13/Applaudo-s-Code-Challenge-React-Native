import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail, Content, Container } from 'native-base';
import styles from './styles';
const EpisodesCard = (props) => {
    return (
        <View style={styles.container}>
            <View styles={styles.imageContainer}>
                <Thumbnail style={styles.thumbnailStyle} square large source={{ uri: props.picture }} />
            </View>
            <View style={styles.details}>
                <Text style={styles.episodeName}>{props.episodeName}</Text>
                <Text style={styles.season}>Season {props.season}, episode {props.episode}</Text>
                {/* <Text style={styles.description}>Synopsis: {'\n'}{props.description}</Text> */}
                <Text style={styles.airingDate}>{props.airingDate}</Text>
            </View>
        </View>
    );
}
export default EpisodesCard