import * as R from 'ramda';

export const colorScheme = {
  white: { value: '#FFF', name: 'White' },
  black: { value: '#000', name: 'Black' },
  primaryBlue: { value: '#3D4CA5', name: 'PrimaryBlue' },
  primaryBlueShadow: {
    value: 'rgba(218, 223, 241, 0.6)',
    name: 'primaryBlueShadow',
  },
  primaryLightBlue: {
    value: 'rgba(62, 79, 161, 0.6)',
    name: 'PrimaryLightBlue',
  },
  primaryLightBlueTags: {
    value: '#455CC7',
    name: 'PrimaryLightBlue',
  },
  primaryLightBlueRemoveButton: {
    value: '#697BD1',
    name: 'PrimaryLightBlueRemoveButton',
  },
  primaryLightBlueRemoveButtonHover: {
    value: '#3c52c3',
    name: 'PrimaryLightBlueRemoveButtonHover',
  },
  primaryDarkBlue: {
    value: '#2433A0',
    name: 'PrimaryDarkBlue',
  },
  lightGrayStep: { value: '#F5F5F5', name: 'LightGrayStep' },
  lightGray: { value: 'rgba(240, 240, 244, 0.75)', name: 'LightGray' },
  primaryLightGray: { value: '#A0A0A0', name: 'PrimaryLightGray' },
  lightGrayTags: { value: '#F4F5F9', name: 'LightGrayTags' },
  lightGrayProgress: { value: '#EAEAEA', name: 'LightGrayProgress' },
  lightGrayWidgetLoader: { value: '#E9E9E9', name: 'LightGrayWidgetLoader' },
  lightGrayWidgetsBg: { value: '#FDFDFD', name: 'LightGrayWidgetsBg' },
  darkGray: { value: '#939393', name: 'DarkGray' },
  darkGrayTags: { value: '#7E86A4', name: 'DarkGrayTags' },
  darkGrayWidgetLoader: { value: '#C4C4C4', name: 'DarkGrayWidgetLoader' },
  primaryDarkGray: { value: '#212121', name: 'PrimaryDarkGray' },
  secondaryDarkGray: { value: '#2B3641', name: 'SecondaryDarkGray' },
  darkGrayPlaceholder: { value: '#878DA6', name: 'DarkGrayPlaceholder' },
  darkGraySearchResults: { value: '#2D3742', name: 'DarkGraySearchResults' },
  primaryGreen: { value: '#5EC695', name: 'PrimaryGreen' },
  greenRating: { value: '#4ADBBD', name: 'GreenRating' },
  redRating: { value: 'rgb(243, 117, 62)', name: 'RedRating' },
  loginPageInputBorder: { value: '#C9C9C9', name: 'LoginPageInputBorder' },
  loginPageInputPlaceholder: {
    value: '#BDBDBD',
    name: 'LoginPageInputPlaceholder',
  },
  yellow: { value: '#F7BE6B', name: 'Yellow' },
  lightYellow: { value: '#FFC650', name: 'LightYellow' },
  darkYellow: { value: '#F5B633', name: 'DarkYellow' },
  redErrorColor: { value: '#F3753E', name: 'RedErrorColor' },
  cyan: { value: '#366DF9', name: 'Cyan' },
  pink: { value: '#FFCBC4', name: 'Pink' },
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
