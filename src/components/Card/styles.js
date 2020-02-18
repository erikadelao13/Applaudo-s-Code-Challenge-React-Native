import { StyleSheet, Dimensions } from 'react-native';
import { resize } from '../../utils/styles';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: resize(25),
    },
    nameStyle: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(15),
        color: colors.darkTextLight
    },
    popularityView: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between',
        paddingTop: resize(5)
    },
    popularityLabel: {
        backgroundColor: colors.lightPurple,
        width: resize(55),
        height: resize(28),
        borderRadius: resize(17),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: resize(6),
    },
    popularityScore: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(13),
        color: colors.lightGray,
        paddingTop: resize(5)
    },
    popularityScoreNumber: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(13, 'h'),
        color: 'white',
        textAlign: 'center',
    },
    thumbnailStyle: {
        width: resize(180),
        height: resize(220),
        borderRadius: resize(10),
    },
    thumbnailMin: {
        width: width / 2.5,
        height: resize(220),
        borderRadius: resize(10),
    },
    nameStyleMin: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(15),
        color: colors.darkTextLight,
        width: width / 2.5,
    },
    footerStyle: {
        width: resize(175)
    }
});