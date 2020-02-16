import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { resize } from '../../utils/styles';
export default StyleSheet.create({
    bone1: {
        marginVertical: resize(30),
        width: resize(130),
        height: resize(180),
        borderRadius: resize(10),
        marginRight: resize(25),
    },
    bone2: {
        width: resize(80),
        height: resize(20),
    }
});