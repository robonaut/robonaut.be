import { SagaIterator } from "redux-saga";
import { call, takeLatest } from "redux-saga/effects";

import { loginUser } from "../../api";
import { Action, ActionTypes } from "../../typings";
import { createApiCall } from "./api";

const login = function* (action: Action): SagaIterator {
  if (action.payload.username !== "guest") {
    yield call(createApiCall(loginUser), action);
  }
};

export const loginSaga = function* (): SagaIterator {
  yield takeLatest(ActionTypes.AUTH_LOGIN, login);
};
