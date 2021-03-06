import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import { getTheme } from 'theme';

import routes from './routes';

const { theme, GlobalStyle } = getTheme('base');

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet titleTemplate="MyZen | %s" defaultTitle="MyZen" />
      <GlobalStyle />
      <div>
        <ScrollToTop>{routes}</ScrollToTop>
      </div>
    </div>
  </ThemeProvider>
);

export default App;
