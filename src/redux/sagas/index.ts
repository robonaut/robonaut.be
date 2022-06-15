import { all, fork } from 'redux-saga/effects';

import { loginSaga } from './auth';
import { bootstrapSaga } from './bootstrap';
import { contactSaga } from './contact';

const rootSaga = function* (): Generator {
  yield all([fork(bootstrapSaga), fork(loginSaga), fork(contactSaga)]);
};

export default rootSaga;
