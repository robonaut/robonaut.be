import type { SagaIterator } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';

import { submitContactForm } from '../../api';
import { ActionTypes } from '../../typings';
import { createApiCall } from './api';

export const contactSaga = function* (): SagaIterator {
  yield takeLatest(ActionTypes.CONTACT_SUBMIT, createApiCall(submitContactForm));
};
