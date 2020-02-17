import { StyleSheet } from 'react-native';
import { resize } from '../../utils/styles';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
export default StyleSheet.create({
    containerTab2: {
        flex: 1,
        backgroundColor: colors.backgroundColorApp,
    },
    containerColumns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: resize(20),
    },
    technicalDetailsTitle: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(16),
        color: colors.darkTextLight,
        textAlign: 'justify',
    },
    technicalDetailsSubtitle: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(14),
        color: colors.lightGray,
        textAlign: 'justify',
    },
    containerTitleSubTitle: {
        paddingBottom: resize(10),
    },
    dateRangeFont: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(14),
        color: colors.darkTextLight,
        textAlign: 'justify',
    }
});