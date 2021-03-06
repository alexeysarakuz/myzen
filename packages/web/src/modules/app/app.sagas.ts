import { all, fork, put, select, take, takeLatest } from 'redux-saga/effects';

import { appAuthenticated, appBootstrap, BOOTSTRAP } from './app.actions';
import { getIsAuthenticated } from 'modules/auth/auth.reducer';

import Loadable from 'react-loadable';

import { LOGIN, REGISTER } from 'modules/auth/auth.actions';
import { REHYDRATE } from 'redux-persist';

function* appBootstrapSaga() {
  yield put(appBootstrap());
}

function* appAuthenticatedSaga() {
  while (true) {
    yield take([REHYDRATE, `${LOGIN}_SUCCESS`, `${REGISTER}_SUCCESS`]);
    const isAuthenticated = yield select(getIsAuthenticated);

    if (isAuthenticated) {
      yield put(appAuthenticated());
    }
  }
}

function* loadPages() {
  yield Loadable.preloadAll();
}

function* appSagas() {
  yield all([
    takeLatest(REHYDRATE, appBootstrapSaga),
    fork(appAuthenticatedSaga),
    takeLatest(BOOTSTRAP, loadPages),
  ]);
}

export default appSagas;
