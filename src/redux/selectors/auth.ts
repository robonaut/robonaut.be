import { createSelector } from 'reselect';

import type { RootState } from '../reducers';

export const tokenSelector = createSelector(
  (state: RootState) => state.auth.data.token,
  token => token,
);

export const userSelector = createSelector(
  (state: RootState) => state.auth.data.user,
  user => user,
);

export const isLoggedInSelector = createSelector(tokenSelector, token => (token ? true : false));
