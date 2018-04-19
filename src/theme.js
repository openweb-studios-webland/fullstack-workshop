import merge from 'deepmerge';
import createTheme from 'spectacle/lib/themes/default';

export const colors = {
  primary: '#FFFFFF',
  secondary: '#353c59',
  tertiary: '#10cbc4',
  quartenary: '#e535ab',
  navy: '#230a81',
  lightGrey: '#f7f8fa',
};

export const size = {
  extraSmall: '1em',
  small: '1.5em',
  medium: '2.3em',
  large: '3.3em',
};

const overrides = {
  components: {
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    text: {
      color: colors.secondary,
      fontSize: size.medium,
      lineHeight: 1.2,
      margin: '0px',
      textAlign: 'left',
      letterSpacing: '1.5px',
    },
    image: {
      margin: '0px',
    },
    heading: {
      h1: {
        color: colors.tertiary,
        fontSize: size.large,
        fontWeight: 'bold',
      },
    },
    link: {
      color: colors.tertiary,
    },
    listItem: {
      fontSize: size.medium,
      lineHeight: 1.5,
    },
    codePane: {
      margin: 0,
      minWidth: '400px',
      '& .prism-code': {
        background: 'transparent !important',
      },
      fontSize: size.extraSmall,
    },
  },
};

export const theme = merge(
  createTheme(colors, {
    primary: {
      name: 'Source Sans Pro',
      googleFont: true,
      styles: ['400'],
    },
    secondary: 'Helvetica',
  }),
  { screen: overrides, print: overrides },
);
