import { StyleSheet, Platform } from 'react-native';
import {
    resize,
    fontFamily,
} from '../../utils/styles';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export default StyleSheet.create({
    container: {
        width: '100%',
        minWidth: '100%',
        height: resize(100),
        justifyContent: 'center',
    },
    containerNormalHeader: {
        width: '100%',
        minWidth: '100%',
        height: resize(100),
        backgroundColor: colors.lightGrayFour,
        justifyContent: 'center',
        //flexGrow: 1
    },
    fullHeaderContainer: {
        width: '100%',
        minWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textContainer: {
        width: '100%',
        minWidth: '100%',
        justifyContent: 'center',
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
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    searchTextInput: {
        // backgroundColor: 'blue',
        fontFamily: fonts.montserratSemiBold,
        fontSize: resize(13),
        color: colors.backgroundColorApp,
        width: '80%'
    },
    serachIcon: {
        color: colors.backgroundColorApp,
    },
    title: {
        fontFamily: fonts.montserratSemiBold,
        fontSize: resize(14),
        textAlign: 'center',
        paddingRight: resize(20),
    },
    iconContainer: {
        justifyContent: 'center',
    },
    arrowIcon: {
        fontSize: resize(23),
        paddingLeft: resize(30),
    }
});
