import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { resize } from '../../utils/styles'
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: resize(10),
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 0.3,
    },
    details: {
        flex: 0.9,
        marginLeft: resize(15),
    },
    thumbnailStyle: {
        width: resize(100),
        height: resize(100),
        borderRadius: resize(10)
    },
    episodeName: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(15),
        color: colors.darkTextLight
    },
    season: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(13),
        color: colors.darkTextLight,
    },
    description: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(13),
        color: colors.darkTextLight,
        paddingTop: resize(5),
        textAlign: 'justify',
    },
    airingDate: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(13),
        color: colors.lightGray,
        paddingTop: resize(5)
    }
});
