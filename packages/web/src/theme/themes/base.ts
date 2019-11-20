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
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
  }
  
  @font-face {
    font-family: 'Merriweather';
    src: url('/fonts/merriweather/Merriweather-Light.ttf');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Light.ttf');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-LightItalic.ttf');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Regular.ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Italic.ttf');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Semibold.ttf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-SemiboldItalic.ttf');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-Bold.ttf');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-BoldItalic.ttf');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-ExtraBold.ttf');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/open-sans/OpenSans-ExtraBoldItalic.ttf');
    font-weight: 900;
    font-style: italic;
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

.icon-checkmark:before {
  content: "\\e909";
}

.icon-user-plus::before {
  content: "\\e907";
}

.icon-help-circle::before {
  content: "\\e908";
}

.icon-close::before {
  content: "\\e5cd";
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
