import type { SagaIterator } from 'redux-saga';
import { put, select, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from '../../typings';
import { actionCreators } from '../actions';
import { isLoggedInSelector } from '../selectors/auth';

const bootstrap = function* (): Generator {
  const isLoggedIn = yield select(isLoggedInSelector);

  if (!isLoggedIn) {
    yield put(actionCreators.logout());
  }
};

export const bootstrapSaga = function* (): SagaIterator {
  yield takeLatest(ActionTypes.APP_BOOTSTRAP, bootstrap);
};
