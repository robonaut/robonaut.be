import type { SagaIterator } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';

import { loginUser } from '../../api';
import { ActionTypes } from '../../typings';
import { createApiCall } from './api';

export const loginSaga = function* (): SagaIterator {
  yield takeLatest(ActionTypes.AUTH_LOGIN, createApiCall(loginUser));
};
