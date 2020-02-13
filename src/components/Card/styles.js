import { StyleSheet } from 'react-native';
import { resize } from '../../utils/styles';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: resize(25),
    },
    containerImage: {
        width: '100%',
        height: '100%',
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
        paddingTop:resize(5)
    },
    popularityLabel: {
        backgroundColor: colors.lightPurple,
        width: resize(45),
        height: resize(23),
        borderRadius: resize(17),
        justifyContent: 'center',
        alignItems: 'center',
    },
    popularityScore: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(13),
        color: colors.lightGray,
        paddingTop: resize(5)
    },
    popularityScoreNumber: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(13),
        color: 'white',
        textAlign: 'center',
    },
    thumbnailStyle: {
        width: resize(180),
        height: resize(220),
        borderRadius: resize(10)
    },
    footerStyle: {
        width: resize(175)
    }
});