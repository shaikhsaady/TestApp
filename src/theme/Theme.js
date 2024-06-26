import {createTheming} from '@callstack/react-theme-provider';

export const theme = {
  lightColor: {
    white: '#FFFFFF',
    black: '#000000',
    background: '#1E1E1E',
    gray: '#85888E',
    blue: '#1357EF',
    lightBlack: '#262B30',
    backgroundRGBA: 'rgba(46, 46, 46, 0.90)',
    borderRGBA: 'rgba(49, 58, 71, 0.50)',
    lightGray: '#94969C',
    red: '#F10025',
    lightBlue: '#313A47',
  },
  darkColor: {},
  fontWeight: {
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '900',
  },
  fontFamily: {
    InterBold: 'Inter-Bold',
    InterMedium: 'Inter-Medium',
    InterRegular: 'Inter-Regular',
  },
  animation: {
    scale: 1.0,
  },
};

const {ThemeProvider, withTheme, useTheme} = createTheming(theme);

export {ThemeProvider, withTheme, useTheme};
