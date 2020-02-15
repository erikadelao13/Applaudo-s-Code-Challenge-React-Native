import { StyleSheet } from 'react-native';
import { resize } from '../../../utils/styles';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundColorApp,
  },
  backgroundContent: {
    backgroundColor: colors.backgroundColorApp,
    flex: 1,
  },
  backgroundContainer: {
    paddingHorizontal: resize(12),
    backgroundColor: colors.backgroundColorApp,
  },
  categoryName: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: resize(18),
    textTransform: 'uppercase',
    color: colors.titleCategoryColor,
    paddingBottom: resize(30),
    paddingTop: resize(10),
    backgroundColor: colors.backgroundColorApp
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});