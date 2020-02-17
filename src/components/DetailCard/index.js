import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail, Content, Container } from 'native-base';
import styles from './styles';
import FooterScrollableTab from '../FooterScrollableTab';
import GeneralDetails from '../GeneralDetails';
import TechnicalDetails from '../TechnicalDetails';
const detailComponent = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Thumbnail style={styles.thumbnailStyle} square large source={{ uri: props.picture }} />
            </View>
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
                {/* <FooterScrollableTab
                    contentTab1={
                        <GeneralDetails
                            synopsis={props.synopsis}
                        />}
                    contentTab2={
                        <TechnicalDetails
                            ageRating={props.ageRating}
                            ageRatingGuide={props.ageRatingGuide}
                            showType={props.showType}
                            startDate={props.startDate}
                            endDate={props.endDate}
                            status={props.status}
                        />}
                /> */}
            </View>
        </View>
    );
}
export default detailComponent