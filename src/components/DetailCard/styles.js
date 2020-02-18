import { StyleSheet } from 'react-native';
import { resize } from '../../utils/styles';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
export default StyleSheet.create({
    container: {
        // flex: 1,
        // width: '100%',
        flex: 1,
        // height: '100%',
        minWidth: '100%',
        width: '100%',
        paddingTop: resize(12, 'h'),
        backgroundColor: colors.backgroundColorApp,
    },
    containerImage: {
        width: '100%',
        height: resize(350, 'h'),
        borderRadius: resize(12),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: resize(2) },
        shadowOpacity: 0.75,
        shadowRadius: 2,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerVideo: {
        width: '100%',
        height: resize(350, 'h'),
    },
    thumbnailStyle: {
        width: '100%',
        height: '100%',
        borderRadius: resize(12),
    },
    thumbnailSmallStyle: {
        borderRadius: resize(12),
        alignSelf: 'center',
        minWidth: '100%',
        width: '100%',
        height: '100%',
    },
    footerStyle: {
        width: '100%',
        // height: resize(350, 'h'),
        // backgroundColor: 'green',
    },
    footerSectionOne: {
        width: '100%',
        height: resize(140, 'h'),
        flexDirection: 'row',
        paddingVertical: resize(20),
    },
    sectionOne: {
        flex: 0.3,
    },
    sectionTwo: {
        flex: 0.5,
        justifyContent: 'center',
        paddingLeft: resize(20),
        paddingRight: resize(10),
        flexDirection: 'column',
    },
    sectionThree: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTab1: {
        flex: 1,
        backgroundColor: colors.backgroundColorApp,
    },
    containerTab2: {
        flex: 1,
        backgroundColor: colors.backgroundColorApp,
    },
    popularityScore: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(13),
        color: colors.lightGray,
        paddingTop: resize(5),
    },
    mainName: {
        fontFamily: fonts.montserratSemiBold,
        fontSize: resize(16),
        color: colors.darkTextLight,
    },
    averageRankingTitle: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(13),
        color: colors.lightGray,
        textAlign: 'center',
        paddingBottom: resize(10),
    },
    averageRankingText: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(13),
        color: 'white',
        textAlign: 'center',
    },
    averageRankingLabel: {
        backgroundColor: colors.lightPurple,
        width: resize(40),
        height: resize(40),
        borderRadius: resize(40 / 2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    synopsisText: {
        fontFamily: fonts.montserratMedium,
        fontSize: resize(14),
        color: colors.darkGray,
        textAlign: 'justify',
        paddingTop: resize(20),
        paddingBottom: resize(20),
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
    },
    playIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: colors.lightPurple,
        borderRadius: resize(90) / 2,
        height: resize(90),
        width: resize(90),
    },
    playIcon: {
        color: colors.backgroundColorApp,
    }
});