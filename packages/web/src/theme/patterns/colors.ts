import * as R from 'ramda';

export const colorScheme = {
  white: { value: '#FFF', name: 'White' },
  black: { value: '#000', name: 'Black' },
  primaryBlue: { value: '#3D4CA5', name: 'PrimaryBlue' },
  primaryLightBlue: {
    value: 'rgba(62, 79, 161, 0.6)',
    name: 'PrimaryLightBlue',
  },
  primaryDarkBlue: {
    value: '#2433A0',
    name: 'PrimaryDarkBlue',
  },
  primaryDarkGray: { value: '#212121', name: 'PrimaryDarkGray' },
  primaryLightGray: { value: '#A0A0A0', name: 'PrimaryLightGray' },
  primaryGreen: { value: '#5EC695', name: 'PrimaryGreen' },
  loginPageInputBorder: { value: '#C9C9C9', name: 'LoginPageInputBorder' },
  loginPageInputPlaceholder: {
    value: '#BDBDBD',
    name: 'LoginPageInputPlaceholder',
  },
  yellow: { value: '#F7BE6B', name: 'Yellow' },
  lightYellow: { value: '#FFC650', name: 'LightYellow' },
  darkYellow: { value: '#391F00', name: 'DarkYellow' },
  redErrorColor: { value: '#F3753E', name: 'RedErrorColor' },
  cyan: { value: '#366DF9', name: 'Cyan' },
  lightRed: { value: '#FFCBC4', name: 'LightRed' },
  darkRed: { value: '#FF6650', name: 'DarkRed' },
};

export const getColor = (colorKey: string) =>
  R.path([colorKey, 'value'], colorScheme);

const getColorsMap = () =>
  R.compose(
    R.reduce(
      (acc: any, [key, scheme]: any) => R.assoc(key, scheme.value, acc),
      {},
    ),
    R.toPairs,
  )(colorScheme);

const colors = getColorsMap();

export default colors;
