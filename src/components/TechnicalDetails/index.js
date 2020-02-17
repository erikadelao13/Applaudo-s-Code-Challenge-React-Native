import React from 'react';
import { View, Text } from 'react-native';
import { Content, Container } from 'native-base';
import styles from './styles';
const TechnicalDetails = (props) => {
    return (
        <Content style={styles.containerTab2}>
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
    );
}
export default TechnicalDetails