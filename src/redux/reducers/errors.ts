import { combineReducers } from "redux";

import { Action, ActionTypes, UnknownError } from "../../typings";

const initialErrors: UnknownError[] = [];
const errorsReducer = (
  state = initialErrors,
  action: Action
): typeof initialErrors => {
  if (action.type === ActionTypes.APP_BOOTSTRAP) {
    return initialErrors;
  }
  if (action.type === ActionTypes.API_ERROR && action.payload.error) {
    return [action.payload.error, ...state].slice(0, 10); // Keep last 10 errors in memory
  }

  return state;
};

const initialShowErrorsState = false;
const showErrorsReducer = (
  state = initialShowErrorsState,
  action: Action
): boolean => {
  if (action.type === ActionTypes.API_ERROR && action.payload.error) {
    return true;
  }
  if (action.type === ActionTypes.ERRORS_DISMISS) {
    return false;
  }
  if (action.type === ActionTypes.API_SUCCESS) {
    return false;
  }

  return state;
};

export default combineReducers({
  history: errorsReducer,
  show: showErrorsReducer,
});
