import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { resize } from '../../utils/styles'
export default StyleSheet.create({
    backgroundContainer: {
        backgroundColor: colors.backgroundColorApp,
        flex: 1,
    },
    colorScroll: {
        backgroundColor: colors.backgroundColorApp,
    },
    borderBottomTabColor: {
        backgroundColor: colors.lightestPurple,
        width: resize(50),
        borderRadius: resize(12),
    },
    activeTextStyleTab: {
        fontFamily: fonts.montserratSemiBold,
        color: colors.darkTextLight,
    },
    activeTabColorBackground: {
        backgroundColor: colors.backgroundColorApp,
    },
    TabColorBackground: {
        backgroundColor: colors.backgroundColorApp,
    },
    textStyleTab: {
        fontFamily: fonts.montserratMedium,
        color: colors.lightGray,
    },
});
