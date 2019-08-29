import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import breakpoints from '../patterns/breakpoints';
import colors from '../patterns/colors';
import fonts from '../patterns/fonts';
import shadows from '../patterns/shadows';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition-delay: 99999s;
  }

  a {
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: none;
    }
  }

  .ant-layout,
  .ant-table-expanded-row {
    background-color: #f5f7fb !important;
  }

  body {
    font-family: "Open Sans", serif;
  }

  @font-face {
    font-family: 'icomoon';
    src: url('/fonts/icomoon/icomoon.eot');
    src:
      url('/fonts/icomoon/icomoon.eot') format('embedded-opentype'),
      url('/fonts/icomoon/icomoon.ttf') format('truetype'),
      url('/fonts/icomoon/icomoon.woff') format('woff'),
      url('/fonts/icomoon/icomoon.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"],
  [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

.icon-user-plus::before {
  content: "\\e907";
}

.icon-settings::before {
  content: "\\e906";
}

.icon-user::before {
  content: "\\e900";
}

.icon-lock_outline::before {
  content: "\\e899";
}

.icon-search::before {
  content: "\\e8b6";
}

.icon-add-outline::before {
  content: "\\e902";
}

.icon-information-outline::before {
  content: "\\e903";
}

.icon-time::before {
  content: "\\e904";
}

.icon-mail::before {
  content: "\\e901";
}

.icon-switch::before {
  content: "\\e905";
}

`;

export const theme = {
  // patterns
  breakpoints,
  colors,
  fonts,
  shadows,
  // components
};
