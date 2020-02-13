import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail, Label } from 'native-base';
import styles from './styles'
const card = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Thumbnail style={styles.thumbnailStyle} square large source={{ uri: props.picture }} />
            </View>
            <View style={styles.footerStyle}>
                <Text numberOfLines={2} style={styles.nameStyle}>{props.name}</Text>
                <View style={styles.popularityView}>
                    <Text style={styles.popularityScore}>Rating</Text>
                    <View style={styles.popularityLabel}>
                        <Text style={styles.popularityScoreNumber}>{props.averageRating}</Text>
                    </View>
                </View>
                <Text style={styles.popularityScore}>{props.numberOfEpisodes} Eps - {props.minutesPerEpisode} Minutes</Text>
            </View>
        </View>
    );
}
export default card