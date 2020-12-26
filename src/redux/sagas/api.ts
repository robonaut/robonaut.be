import { SagaIterator } from "redux-saga";
import { call, put, select } from "redux-saga/effects";

import log from "../../log";
import { Action, ApiCallPayload, ApiResponse } from "../../typings";
import { actionCreators } from "../actions";
import { tokenSelector } from "../selectors/auth";

export const createApiCall = (
  apiFn: ({ data, token }: ApiCallPayload) => Promise<ApiResponse>
) => {
  return function* (action: Action): SagaIterator {
    const token = yield select(tokenSelector);
    const { response, error }: ApiResponse = yield call(apiFn, {
      data: action.payload,
      token,
    });

    if (error) {
      log.error(action.type, error);
      yield put(actionCreators.apiError(action, error));
    } else if (response) {
      yield put(actionCreators.apiSuccess(action, response));

      return response;
    }
  };
};
