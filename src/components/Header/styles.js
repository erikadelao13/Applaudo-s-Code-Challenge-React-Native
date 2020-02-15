import { StyleSheet, Platform } from 'react-native';
import {
    resize,
    fontFamily,
} from '../../utils/styles';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        height:'100%',
        flexDirection: 'row',
        backgroundColor: colors.backgroundColorApp,
        //flexGrow: 1
    },
});
