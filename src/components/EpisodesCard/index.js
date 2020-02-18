import React from 'react';
import { View, Text } from 'react-native';
import { Thumbnail } from 'native-base';
import styles from './styles';
const EpisodesCard = (props) => {
    return (
        <View style={styles.container}>
            <View styles={styles.imageContainer}>
                <Thumbnail style={styles.thumbnailStyle} square large source={props.picture} />
            </View>
            <View style={styles.details}>
                <Text style={styles.episodeName}>{props.episodeName}</Text>
                <Text style={styles.season}>Season {props.season}, episode {props.episode}</Text>
                <Text style={styles.airingDate}>{props.airingDate}</Text>
            </View>
        </View>
    );
}
export default EpisodesCard