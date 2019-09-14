export const namespace = 'AUTH';
export const LOGIN = `${namespace}/LOGIN`;
export const REGISTER = `${namespace}/REGISTER`;
export const LOGOUT = `${namespace}/LOGOUT`;

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  enableEmails: boolean;
}

export const login = (payload: { email: string; password: string }) => ({
  type: LOGIN,
  payload: {
    request: {
      url: '/auth/login',
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
