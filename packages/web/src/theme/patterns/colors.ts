import * as R from 'ramda';

export const colorScheme = {
  white: { value: '#FFF', name: 'White' },
  black: { value: '#000', name: 'Black' },
  primaryBlue: { value: '#3E4FA1', name: 'PrimaryBlue' },
  primaryLightBlue: {
    value: 'rgba(62, 79, 161, 0.6)',
    name: 'PrimaryLightBlue',
  },
  primaryDarkGray: { value: '#212121', name: 'PrimaryDarkGray' },
  primaryLightGray: { value: '#A0A0A0', name: 'PrimaryLightGray' },
  primaryGreen: { value: '#5EC695', name: 'PrimaryGreen' },
  loginPageInputBorder: { value: '#C9C9C9', name: 'LoginPageInputBorder' },
  loginPageInputPlaceholder: {
    value: '#BDBDBD',
    name: 'LoginPageInputPlaceholder',
  },
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
