import { StyleSheet, Platform } from 'react-native';
import {
    resize,
    fontFamily,
} from '../../utils/styles';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    container: {
        width: '100%',
        minWidth: '100%',
        height: resize(100),
        // backgroundColor: 'red',
        justifyContent: 'center',
        //flexGrow: 1
    },
    fullHeaderContainer: {
        width: '100%',
        minWidth: '100%',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        flexDirection: 'row',
    },
    searchContainer: {
        marginTop: resize(12),
        borderRadius: resize(25),
        marginHorizontal: resize(60),
        justifyContent: 'center',
        backgroundColor: colors.lightGrayTwo,
        flexDirection: 'row',
    },
    searchContainerIcon: {
        width: '20%',
        justifyContent: 'center',
        alignItems:'center',
        // backgroundColor: 'yellow',
    },
    searchTextInput: {
        // backgroundColor: 'blue',
        fontFamily: fonts.montserratSemiBold,
        fontSize: resize(13),
        color: colors.backgroundColorApp,
        width: '80%'
    },
    serachIcon:{
        color: colors.backgroundColorApp,
    }
});
