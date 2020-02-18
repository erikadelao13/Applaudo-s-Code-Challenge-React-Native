import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import styles from './styles'
const card = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressCard}>
            <View style={styles.container}>
                <View>
                    <Thumbnail style={props.cardForSearch === false ? styles.thumbnailStyle : styles.thumbnailMin} square large source={props.picture} />
                </View>
                <View style={styles.footerStyle}>
                    <Text numberOfLines={2} style={props.cardForSearch === false ? styles.nameStyle : styles.nameStyleMin}>{props.name}</Text>
                    <View style={styles.popularityView}>
                        <Text style={styles.popularityScore}>Popularity</Text>
                        <View style={styles.popularityLabel}>
                            <Text style={styles.popularityScoreNumber}>{props.averageRating}</Text>
                        </View>
                    </View>
                    {props.mangaTypeActive ?
                        (
                            <Text style={styles.popularityScore}>{props.numberOfEpisodes} Chapters - {props.minutesPerEpisode} {props.minutesPerEpisode === 1 ? 'Book' : 'Books'}</Text>
                        )
                        :
                        <Text style={styles.popularityScore}>{props.numberOfEpisodes} Eps - {props.minutesPerEpisode} {props.minutesPerEpisode === 1 ? 'Minute' : 'Minutes'}</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default card