export const namespace = 'RECRUIT';
export const SEARCH_FREELANCERS_ONLOAD = `${namespace}/SEARCH_FREELANCERS_ONLOAD`;
export const SEARCH_FREELANCERS = `${namespace}/SEARCH_FREELANCERS`;

export const searchFreelancersOnLoad = (payload: { tags: string[] }) => ({
  type: SEARCH_FREELANCERS_ONLOAD,
  payload: {
    request: {
      method: 'GET',
      url: '/freelancers/getPopular/',
      data: payload,
    },
  },
});

export const searchFreelancers = (payload: { tags: string[] }) => ({
  type: SEARCH_FREELANCERS,
  payload: {
    request: {
      method: 'GET',
      url: '/freelancers/getPopular/',
      data: payload,
    },
  },
});
