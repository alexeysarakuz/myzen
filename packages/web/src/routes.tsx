import Loadable from 'react-loadable';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Preloader from 'components/Preloader/Preloader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import UnauthorizedRoute from 'components/UnauthorizedRoute/UnauthorizedRoute';

const MainPage = Loadable({
  loader: () =>
    import('./modules/main/pages/MainPage' /* webpackChunkName: "MainPage" */),
  loading: () => <Preloader />,
});

const LoginPage = Loadable({
  loader: () =>
    import(
      './modules/auth/pages/LoginPage' /* webpackChunkName: "LoginPage" */
    ),
  loading: () => <Preloader />,
});

const RegisterPage = Loadable({
  loader: () =>
    import(
      './modules/auth/pages/RegisterPage' /* webpackChunkName: "RegisterPage" */
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
      './modules/dashboard/pages/SearchResultsPage' /* webpackChunkName: "SearchResultsPage" */
    ),
  loading: () => <Preloader />,
});

const FindWorkPage = Loadable({
  loader: () =>
    import(
      './modules/dashboard/pages/FindWorkPage' /* webpackChunkName: "FindWorkPage" */
    ),
  loading: () => <Preloader />,
});

const GeneralProfilePage = Loadable({
  loader: () =>
    import(
      './modules/profile/pages/GeneralProfilePage' /* webpackChunkName: "GeneralProfilePage" */
    ),
  loading: () => <Preloader />,
});

const MyProfilePage = Loadable({
  loader: () =>
    import(
      './modules/profile/pages/MyProfilePage' /* webpackChunkName: "MyProfilePage" */
    ),
  loading: () => <Preloader />,
});

const GettingStartedPage = Loadable({
  loader: () =>
    import(
      './modules/dashboard/pages/GettingStartedPage' /* webpackChunkName: "GettingStartedPage" */
    ),
  loading: () => <Preloader />,
});

export default (
  <div>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <UnauthorizedRoute exact path="/register" component={RegisterPage} />
      <UnauthorizedRoute exact path="/login" component={LoginPage} />
      <Route exact path="/search" component={SearchResultsPage} />
      <Route exact path="/find-a-work" component={FindWorkPage} />
      <PrivateRoute
        exact
        path="/getting-started"
        component={GettingStartedPage}
      />
      <Route exact path="/profile/:profileId" component={GeneralProfilePage} />
      <PrivateRoute exact path="/me" component={MyProfilePage} />
      {/* Catch all routes */}
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);
