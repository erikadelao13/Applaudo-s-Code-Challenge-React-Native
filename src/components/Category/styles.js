import { StyleSheet } from 'react-native';
import { resize } from '../../utils/styles';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColorApp,
    paddingTop: resize(20)
  },
  categoryName:{
    fontFamily: fonts.notoBold,
    fontSize: resize(14),
  },
});