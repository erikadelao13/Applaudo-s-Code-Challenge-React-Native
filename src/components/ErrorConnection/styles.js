import { StyleSheet, Dimensions } from 'react-native';
import { resize } from '../../utils/styles';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: resize(12),
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImage: {
        justifyContent: 'center'
    },
    imgError: {
        width: resize(100),
        height: resize(100),
    },
    buttonContainer: {
        width: resize(100),
        height: resize(50),
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: resize(10),
        borderRadius: resize(12),
    },
    textButtonStyle: {
        fontFamily: fonts.montserratSemiBold,
        color: 'white',
        fontSize: resize(14),
    },
    title: {
        fontFamily: fonts.montserratSemiBold,
        fontSize: resize(18),
        color: colors.titleCategoryColor,
        paddingTop: resize(5),
    },
});