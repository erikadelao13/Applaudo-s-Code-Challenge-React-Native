import { StyleSheet } from 'react-native';
import { resize } from '../../utils/styles';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
export default StyleSheet.create({
    containerTab1: {
        backgroundColor: colors.backgroundColorApp,
    },
    synopsisText: {
        // height:'100%',
        fontFamily: fonts.montserratMedium,
        fontSize: resize(14),
        color: colors.darkGray,
        textAlign: 'justify',
        paddingTop: resize(20),
        paddingBottom: resize(20),
    },
});