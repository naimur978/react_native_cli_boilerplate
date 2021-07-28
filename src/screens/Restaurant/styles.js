import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  icons,
  SIZES,
  images,
  GOOGLE_API_KEY,
} from '@constants';

const styles = StyleSheet.create({
  text: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding * 3,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.darkgray,
  },
});

export default styles;

