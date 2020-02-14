import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail, Content, Container } from 'native-base';
import styles from './styles';
import FooterScrollableTab from '../FooterScrollableTab';
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
                    <FooterScrollableTab
                        contentTab1={
                            <Container style={styles.containerTab1}>
                                <Content showsVerticalScrollIndicator={false}>
                                    <Text style={styles.synopsisText}>{props.synopsis}</Text>
                                </Content>
                            </Container>}
                        contentTab2={
                            <Container style={styles.containerTab2}>
                                <Content showsVerticalScrollIndicator={false}>
                                    <View style={styles.containerColumns}>
                                        <View>
                                            <View style={styles.containerTitleSubTitle}>
                                                <Text style={styles.technicalDetailsTitle}>Age Rating</Text>
                                                <Text style={styles.technicalDetailsSubtitle}>{props.ageRating} - {props.ageRatingGuide}</Text>
                                            </View>

                                            <View style={styles.containerTitleSubTitle}>
                                                <Text style={styles.technicalDetailsTitle}>Show Type</Text>
                                                <Text style={styles.technicalDetailsSubtitle}>{props.showType}</Text>
                                            </View>

                                            <View style={styles.containerTitleSubTitle}>
                                                <Text style={styles.technicalDetailsTitle}>Year</Text>
                                                <Text style={styles.technicalDetailsSubtitle}><Text style={styles.dateRangeFont}>From: </Text>{props.startDate} <Text style={styles.dateRangeFont}> To: </Text>{props.endDate}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={styles.containerTitleSubTitle}>
                                                <Text style={styles.technicalDetailsTitle}>Status</Text>
                                                <Text style={styles.technicalDetailsSubtitle}>{props.status}</Text>
                                            </View>

                                            <View style={styles.containerTitleSubTitle}>
                                                <Text style={styles.technicalDetailsTitle}>Genres</Text>
                                                <Text style={styles.technicalDetailsSubtitle}>{props.startDate} - {props.endDate}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Content>
                            </Container>}
                    />
                </View>
        </View>
    );
}
export default detailComponent