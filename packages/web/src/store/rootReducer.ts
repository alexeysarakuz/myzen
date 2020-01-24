import * as R from 'ramda';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import ReduxPersist from 'config/ReduxPersist';

import AuthReducer, {
  STATE_KEY as AUTH_STATE_KEY,
} from 'modules/auth/auth.reducer';

import RouterReducer, {
  STATE_KEY as ROUTER_STATE_KEY,
} from 'modules/router/RouterReducer';

import RecruitReducer, {
  STATE_KEY as RECRUIT_STATE_KEY,
} from 'modules/dashboard/recruit.reducer';

const persist = R.curry(persistReducer)(ReduxPersist.storeConfig);

export default (history: any) =>
  R.compose(
    persist,
    combineReducers,
    R.assoc(AUTH_STATE_KEY, AuthReducer),
    R.assoc(RECRUIT_STATE_KEY, RecruitReducer),
    R.assoc(ROUTER_STATE_KEY, RouterReducer(history)),
  )({});
