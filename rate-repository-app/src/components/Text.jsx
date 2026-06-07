import { Text as NativeText, StyleSheet, Platform } from 'react-native';
import theme from '../theme';

// console.log('Platform', Platform.OS);

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select({
      android: theme.fonts.mainAndroid,
      ios: theme.fonts.mainIOS,
      default: theme.fonts.main,
    }),
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  colorWhite: {
    color: theme.colors.textWhite,
  },
  colorBlack: {
    color: theme.colors.black,
  },
  colorError: {
    color: theme.colors.textError,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'textWhite' && styles.colorWhite,
    color === 'textError' && styles.colorError,
    color === 'black' && styles.colorBlack,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;