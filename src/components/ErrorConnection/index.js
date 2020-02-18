import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';
import styles from './styles';
import NoConnectionImage from '../../assets/images/nowifi_.png'
const NoConnectionScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Whoops!</Text>
            <Text style={styles.title}>No internet Connection</Text>
            <Thumbnail style={styles.imgError} square source={NoConnectionImage} />
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.textButtonStyle}>Reload</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default NoConnectionScreen