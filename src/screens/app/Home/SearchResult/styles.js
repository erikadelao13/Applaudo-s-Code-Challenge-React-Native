import { StyleSheet, Platform } from 'react-native';
import {
    resize,
} from '../../../../utils/styles';
import fonts from '../../../../utils/fonts';
import colors from '../../../../utils/colors';

export default StyleSheet.create({
    container: {
        // alignItems: 'center',
        backgroundColor: colors.backgroundColorApp,
    },
    emptyStateText:{
        color: colors.darkTextLight,
        fontFamily: fonts.montserratSemiBold,
        fontSize: resize(15),
        textAlign: 'center',
    }
});
