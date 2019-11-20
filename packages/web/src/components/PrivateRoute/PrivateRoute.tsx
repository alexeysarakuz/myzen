import { connect } from 'react-redux';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { getIsAuthenticated } from 'modules/auth/auth.reducer';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}: Record<string, any>) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/register" />
    }
  />
);

PrivateRoute.defaultProps = {
  isAuthenticated: false,
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  null,
)(PrivateRoute);
