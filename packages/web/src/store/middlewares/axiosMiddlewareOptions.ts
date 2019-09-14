import { getToken } from 'modules/auth/auth.reducer';

export default {
  interceptors: {
    request: [
      ({ getState }: any, request: any) => {
        const state = getState();
        const token = getToken(state);
        if (token) {
          request.headers.authorization = `Token ${token}`;
        }
        return request;
      },
    ],
  },
};
