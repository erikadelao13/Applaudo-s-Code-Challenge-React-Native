import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Thumbnail, Content, Container, Icon } from 'native-base';
import styles from './styles';
const detailComponent = (props) => {
    return (
        <View style={styles.container}>
            {props.onPLayVideo === false ?
                <TouchableOpacity onPress={props.onPress}>
                    <View style={styles.containerImage}>
                        <Thumbnail style={styles.thumbnailStyle} square large source={{ uri: props.picture }} />
                        {!props.mangaTypeActive &&
                            (<View style={styles.playIconContainer}>
                                <Icon style={styles.playIcon} type="FontAwesome" name="play" />
                            </View>)
                        }
                    </View>
                </TouchableOpacity>
                :
                <View style={styles.containerVideo}>
                    {props.youtubeVideo}
                </View>
            }
            <View style={styles.footerStyle}>
                <View style={styles.footerSectionOne}>
                    <View style={styles.sectionOne}>
                        <Thumbnail style={styles.thumbnailSmallStyle} square source={{ uri: props.mainPicture }} />
                    </View>
                    <View style={styles.sectionTwo}>
                        <Text style={styles.mainName}>{props.name}</Text>
                        {props.mangaTypeActive ?
                            (
                                <Text style={styles.popularityScore}>{props.numberOfEpisodes} Chapters - {props.minutesPerEpisode} {props.minutesPerEpisode === 1 ? 'Book' : 'Books'}</Text>
                            )
                            :
                            <Text style={styles.popularityScore}>{props.numberOfEpisodes} Eps - {props.minutesPerEpisode} {props.minutesPerEpisode === 1 ? 'Minute' : 'Minutes'}</Text>
                        }
                    </View>
                    <View style={styles.sectionThree}>
                        <Text style={styles.averageRankingTitle}>Average rating</Text>
                        <View style={styles.averageRankingLabel}>
                            <Text style={styles.averageRankingText}>{props.averageRating}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default detailComponent