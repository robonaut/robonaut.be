import { all, fork } from "redux-saga/effects";

import { loginSaga } from "./auth";
import { bootstrapSaga } from "./bootstrap";

const rootSaga = function* (): Generator {
  yield all([fork(bootstrapSaga), fork(loginSaga)]);
};

export default rootSaga;
