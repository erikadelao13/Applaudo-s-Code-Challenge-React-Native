import React from 'react';
import { View, TouchableWithoutFeedback, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
const modal = (props) => {
    return (
        <Modal
            visible={props.show}
            animated
            animationType="fade"
            transparent
            onRequestClose={props.onCloseOutside}>
            <TouchableWithoutFeedback onPress={props.onTapOutside}>
                <View style={styles.container}>
                    <View style={styles.modalShow}>
                        <Text style={styles.label}>{props.title}</Text>
                        <Text style={styles.labelTwo}>{props.subtitle}</Text>
                        <TouchableOpacity onPress={props.onPress}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    {props.buttonText}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
export default modal