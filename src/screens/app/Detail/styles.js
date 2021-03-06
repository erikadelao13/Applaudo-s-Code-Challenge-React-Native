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
  title: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: resize(18),
    textTransform: 'uppercase',
    color: colors.titleCategoryColor,
    paddingTop: resize(15),
    paddingBottom: resize(20),
  },
  youtubeVideoStyle: {
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    alignItems:'center',
    paddingBottom: resize(5),
  },
  favoritesButton: {
    width: resize(200),
    height: resize(50),
    backgroundColor: colors.backgroundColorApp,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: resize(10),
    borderWidth: 2,
    borderColor: colors.lightPurple,
  },
  favoriteButtonText: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: resize(14),
    color: colors.lightPurple,
  }
});