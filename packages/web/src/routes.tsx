import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import Preloader from 'components/Preloader/Preloader';

const DashboardPage = Loadable({
  loader: () =>
    import(
      './modules/dashboard/pages/DashboardPage' /* webpackChunkName: "DashboardPage" */
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

export default (
  <div>
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/logout" component={LogoutPage} />
      {/* Catch all routes */}
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);
