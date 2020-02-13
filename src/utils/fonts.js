import { Platform } from 'react-native'

const fonts = {
  notoRegular: Platform.OS === 'android' ? 'NotoSans-Regular' : 'Noto Sans',
  notoBold: 'NotoSans-Bold',
  notoRegularItalic: 'NotoSans-RegularItalic',
  notoBoldItalic: 'NotoSans-BoldItalic',
  interstateCond: 'Interstate Cond',
  montserratMedium: 'Montserrat-Medium',
  montserratRegular: 'Montserrat-Regular',
  montserratSemiBold: 'Montserrat-SemiBold'

}
export default fonts;