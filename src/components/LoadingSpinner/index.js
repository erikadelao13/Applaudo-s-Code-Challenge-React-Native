import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
const loader = (props) => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator color={props.color} size={'large'} />
        </View>
    )
}
export default loader