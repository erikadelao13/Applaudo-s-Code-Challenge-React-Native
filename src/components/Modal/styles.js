import { StyleSheet } from 'react-native';
import { resize } from '../../utils/styles';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: resize(30),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.7)',
    },
    modalShow: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: resize(10),
        alignItems: 'center',
        paddingVertical: resize(20, 'h')
    },
    label: {
        fontFamily: fonts.montserratSemiBold,
        fontSize: resize(20),
        color: colors.darkTextLight,
        textAlign: 'center',
        paddingHorizontal: resize(8),
    },
    labelTwo: {
        textAlign: 'center',
        fontFamily: fonts.montserratSemiBold,
        fontSize: resize(15),
        color: colors.modalgreyText,
        paddingVertical: resize(10),
        paddingHorizontal: resize(5),
    },
    button: {
        width: '100%',
        height: resize(50, 'h'),
        backgroundColor: colors.lightPurple,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: resize(72)
    },
    buttonText: {
        fontFamily: fonts.montserratSemiBold,
        color: 'white',
        fontSize: resize(16),
    },
});