import * as R from 'ramda';

import {
  LOGIN,
  REGISTER,
  LOGOUT,
  RESET_ERRORS,
  SET_REGISTER_ERRORS,
  SET_LOGIN_ERRORS,
} from './auth.actions';

export const STATE_KEY = 'auth';

export interface AuthState {
  name: string;
  email: string;
  token: string;
  profile_picture: string;
  isAuthenticated: boolean;
  registerErrors: {
    email: string[];
    name: string[];
    password: string[];
  };
  loginErrors: {
    general: string[];
  };
}

export const initialState: AuthState = {
  name: null,
  email: null,
  token: null,
  profile_picture: null,
  isAuthenticated: false,
  registerErrors: {
    email: [],
    name: [],
    password: [],
  },
  loginErrors: {
    general: [],
  },
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
      const profile_picture = action.payload.data.data.profile_picture;

      return { ...state, isAuthenticated: true, name, email, profile_picture };
    }
    case SET_REGISTER_ERRORS: {
      return { ...state, registerErrors: action.payload };
    }
    case SET_LOGIN_ERRORS: {
      return { ...state, loginErrors: action.payload };
    }
    case RESET_ERRORS: {
      return { ...state, registerErrors: {}, loginErrors: {} };
    }
    case LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const getRegisterErrors = R.path([STATE_KEY, 'registerErrors']);
export const getLoginErrors = R.path([STATE_KEY, 'loginErrors']);

export const getId = R.path([STATE_KEY, 'name']);
export const getIsAuthenticated = R.path([STATE_KEY, 'isAuthenticated']);
export const getToken = R.path([STATE_KEY, 'token']);
export const getEmail = R.path([STATE_KEY, 'email']);
export const getProfilePicture = R.path([STATE_KEY, 'profile_picture']);

export default AuthReducer;
