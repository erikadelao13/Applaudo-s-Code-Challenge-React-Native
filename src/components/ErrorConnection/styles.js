import { StyleSheet, Dimensions } from 'react-native';
import { resize } from '../../utils/styles';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    containerImage: {
        width: '100%',
        minWidth: '100%',
        height: '70%',
    },
    imgError: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        paddingHorizontal: resize(100),
        height: resize(50),
    },
    textButtonStyle: {
        fontFamily: fonts.montserratSemiBold,
        color: colors.lightGray,
        fontSize: resize(14),
    },
    sectionTwo:{
        width: '100%',
        minWidth: '100%',
        height: '30%',
    }
});