import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import styles from './styles';
import NoConnectionImage from '../../assets/images/cartoon-cloud-without-network-hint.jpg'
const NoConnectionScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Thumbnail style={styles.imgError} square source={NoConnectionImage} />
            </View>
            <View style={styles.sectionTwo}>
                <TouchableOpacity onPress={props.onPress}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.textButtonStyle}>Reload</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}
export default NoConnectionScreen