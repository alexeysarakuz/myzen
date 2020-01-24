import { all, takeEvery } from 'redux-saga/effects';
import {
  // SEARCH_FREELANCERS,
  SEARCH_FREELANCERS_ONLOAD,
} from './recruit.actions';

function* searchPopularFreelancersSaga() {
  yield console.log();
}

function* recruitSagas() {
  yield all([
    takeEvery(SEARCH_FREELANCERS_ONLOAD, searchPopularFreelancersSaga),
  ]);
}

export default recruitSagas;
