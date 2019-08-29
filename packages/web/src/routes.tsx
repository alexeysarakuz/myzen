import Loadable from 'react-loadable';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Preloader from 'components/Preloader/Preloader';

const MainPage = Loadable({
  loader: () =>
    import('./modules/main/pages/MainPage' /* webpackChunkName: "MainPage" */),
  loading: () => <Preloader />,
});

const RegisterPage = Loadable({
  loader: () =>
    import(
      './modules/auth/pages/RegisterPage' /* webpackChunkName: "LogoutPage" */
    ),
  loading: () => <Preloader />,
});

const LogoutPage = Loadable({
  loader: () =>
    import(
      './modules/auth/pages/LogoutPage' /* webpackChunkName: "LogoutPage" */
    ),
  loading: () => <Preloader />,
});

const NotFoundPage = Loadable({
  loader: () =>
    import(
      './modules/landing/pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */
    ),
  loading: () => <Preloader />,
});

const SearchResultsPage = Loadable({
  loader: () =>
    import(
      './modules/dashboard/pages/SearchResultsPage' /* webpackChunkName: "MainPage" */
    ),
  loading: () => <Preloader />,
});

export default (
  <div>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/search" component={SearchResultsPage} />
      {/* Catch all routes */}
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);