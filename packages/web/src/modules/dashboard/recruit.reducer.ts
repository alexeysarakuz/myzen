import * as R from 'ramda';

import { SEARCH_FREELANCERS_ONLOAD } from './recruit.actions';

export const STATE_KEY = 'recruit';

export interface RecruitState {
  freelancers?: any;
  freelancersQuantity: number | null;
}

export const initialState: RecruitState = {
  freelancers: [],
  freelancersQuantity: null,
};

const RecruitReducer = (
  state: RecruitState = initialState,
  action: Record<string, any>,
) => {
  switch (action.type) {
    case `${SEARCH_FREELANCERS_ONLOAD}_SUCCESS`: {
      return {
        ...state,
        freelancers: action.payload.data.data.freelancers,
        freelancersQuantity: action.payload.data.data.quantity,
      };
    }
    default: {
      return state;
    }
  }
};

export const getFreelancers = R.path([STATE_KEY, 'freelancers']);
export const getFreelancersQuantity = R.path([
  STATE_KEY,
  'freelancersQuantity',
]);

export default RecruitReducer;
