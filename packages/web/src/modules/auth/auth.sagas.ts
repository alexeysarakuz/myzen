import { push } from 'connected-react-router';
import { all, put, takeEvery } from 'redux-saga/effects';

import {
  REGISTER,
  LOGIN,
  LOGOUT,
  SET_LOGIN_ERRORS,
  SET_REGISTER_ERRORS,
} from './auth.actions';

function* registerSuccessSaga() {
  yield put(push('/'));
}

function* registerFailSaga(action: any) {
  const errorNum = action.error.response.status;

  let payload = {};
  if (errorNum === 409) {
    payload = {
      email: ['Account with current email is already exists'],
    };
  } else if (errorNum === 500 || errorNum === 501) {
    payload = {
      general: ['Server error. Try again later'],
    };
  }

  yield put({
    type: SET_REGISTER_ERRORS,
    payload,
  });
}

function* loginFailSaga(action: any) {
  const errorNum = action.error.response.status;

  let payload = {};
  if (errorNum === 401) {
    payload = {
      general: ['You entered wrong email or password'],
    };
  } else if (errorNum === 500 || errorNum === 501) {
    payload = {
      general: ['Server error. Try again later'],
    };
  }

  yield put({
    type: SET_LOGIN_ERRORS,
    payload,
  });
}

function* loginSuccessSaga() {
  yield put(push('/'));
}

function* logoutSaga(): any {
  yield put(push('/login'));
}

function* authSagas() {
  yield all([
    yield takeEvery(`${REGISTER}_FAIL`, registerFailSaga),
    yield takeEvery(`${LOGIN}_FAIL`, loginFailSaga),
    yield takeEvery(`${REGISTER}_SUCCESS`, registerSuccessSaga),
    yield takeEvery(`${LOGIN}_SUCCESS`, loginSuccessSaga),
    yield takeEvery(LOGOUT, logoutSaga),
  ]);
}

export default authSagas;
