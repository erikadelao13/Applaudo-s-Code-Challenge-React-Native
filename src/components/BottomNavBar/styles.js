import { StyleSheet } from 'react-native';
import { resize } from '../../utils/styles';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

export default StyleSheet.create({
    container: {
        height: resize(58, 'h'),
        // paddingTop: resize(5, 'h'),
        width: '100%',
        minWidth: '100%',
        backgroundColor: colors.headerblue,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
    },
});
