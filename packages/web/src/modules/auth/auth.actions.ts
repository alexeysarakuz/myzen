export const namespace = 'AUTH';
export const LOGIN = `${namespace}/LOGIN`;
export const REGISTER = `${namespace}/REGISTER`;
export const LOGOUT = `${namespace}/LOGOUT`;
export const SET_REGISTER_ERRORS = `${namespace}/SET_REGISTER_ERRORS`;
export const SET_LOGIN_ERRORS = `${namespace}/SET_LOGIN_ERRORS`;
export const RESET_ERRORS = `${namespace}/RESET_ERRORS`;

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  enableEmails: boolean;
}

export const resetErrors = () => ({
  type: RESET_ERRORS,
});

export const setRegisterErrors = (payload: {
  email?: string[];
  name?: string[];
  password?: string[];
}) => ({
  type: SET_REGISTER_ERRORS,
  payload: payload,
});

export const setLoginErrors = (payload: {
  email?: string[];
  password?: string[];
}) => ({
  type: SET_LOGIN_ERRORS,
  payload: payload,
});

export const login = (payload: { email: string; password: string }) => ({
  type: LOGIN,
  payload: {
    request: {
      method: 'POST',
      url: '/accounts/login/',
      data: payload,
    },
  },
});

export const register = (payload: RegisterPayload) => ({
  type: REGISTER,
  payload: {
    request: {
      method: 'POST',
      url: '/accounts/register/',
      data: payload,
    },
  },
});

export const logout = () => ({
  type: LOGOUT,
});
