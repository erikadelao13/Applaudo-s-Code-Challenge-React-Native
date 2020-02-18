import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { resize } from '../../utils/styles'
export default StyleSheet.create({
    container: {
        width: '100%',
        minWidth: '100%',
        height: resize(150),
        paddingVertical: resize(10),
        flexDirection: 'row',
    },
    imageContainer: {
        width: '30%',
    },
    details: {
        width: '70%',
        marginLeft: resize(15),
        paddingTop: resize(40),
    },
    thumbnailStyle: {
        width: resize(100),
        height: resize(100),
        borderRadius: resize(10)
    },
    animeName: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(15),
        color: colors.darkTextLight
    },
});
