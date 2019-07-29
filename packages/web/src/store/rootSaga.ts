import { all, fork } from 'redux-saga/effects';

import appSagas from 'modules/app/app.sagas';
import authSagas from 'modules/auth/auth.sagas';

function* rootSaga() {
  yield all([fork(appSagas)]);
  yield all([fork(authSagas)]);
}

export default rootSaga;
