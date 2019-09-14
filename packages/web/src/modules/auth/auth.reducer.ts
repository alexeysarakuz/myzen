import * as R from 'ramda';

import { LOGIN, REGISTER, LOGOUT } from './auth.actions';

export const STATE_KEY = 'auth';

export interface AuthState {
  name: string;
  email: string;
  token: string;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  name: null,
  email: null,
  token: null,
  isAuthenticated: false,
};

const AuthReducer = (
  state: AuthState = initialState,
  action: Record<string, any>,
) => {
  switch (action.type) {
    case `${LOGIN}_SUCCESS`:
    case `${REGISTER}_SUCCESS`: {
      const email = action.payload.data.data.email;
      const name = action.payload.data.data.name;

      return R.mergeDeepRight(state, {
        isAuthenticated: true,
        name,
        email,
      });
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const getId = R.path([STATE_KEY, 'name']);
export const getIsAuthenticated = R.path([STATE_KEY, 'isAuthenticated']);
export const getToken = R.path([STATE_KEY, 'token']);
export const getEmail = R.path([STATE_KEY, 'email']);

export default AuthReducer;
