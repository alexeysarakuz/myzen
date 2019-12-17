import { connect } from 'react-redux';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { getIsAuthenticated } from 'modules/auth/auth.reducer';

const UnauthorizedRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}: Record<string, any>) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to="/me" /> : <Component {...props} />
    }
  />
);

UnauthorizedRoute.defaultProps = {
  isAuthenticated: false,
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(UnauthorizedRoute);
