import { all, fork } from 'redux-saga/effects';

import appSagas from 'modules/app/app.sagas';
import authSagas from 'modules/auth/auth.sagas';
import recruitSagas from 'modules/dashboard/recruit.sagas';

function* rootSaga() {
  yield all([fork(appSagas)]);
  yield all([fork(authSagas)]);
  yield all([fork(recruitSagas)]);
}

export default rootSaga;
