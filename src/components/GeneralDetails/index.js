import React from 'react';
import { View, Text } from 'react-native';
import { Content, Container } from 'native-base';
import styles from './styles';
const GeneralDetails = (props) => {
    return (
        <Content style={styles.containerTab1}>
                <Text style={styles.synopsisText}>{props.synopsis}</Text>
        </Content>
    );
}
export default GeneralDetails