import { combineReducers } from "redux";

import { Action, ActionTypes } from "../../typings";

const initialAuthStatus = {};
const authStatusReducer = (
  state = initialAuthStatus
): typeof initialAuthStatus => {
  return state;
};

const initialAuthData = {
  token: "",
  agent: {
    agentid: "",
    email: "",
  },
};
const authDataReducer = (
  state = initialAuthData,
  action: Action
): typeof initialAuthData => {
  if (
    action.type === ActionTypes.API_SUCCESS &&
    action.payload.originalAction?.type === ActionTypes.AUTH_LOGIN
  ) {
    return <typeof initialAuthData>action.payload.response;
  }

  if (
    action.type === ActionTypes.API_ERROR &&
    action.payload.originalAction?.type === ActionTypes.AUTH_GET_USER &&
    action.payload.error?.status === 401
  ) {
    return initialAuthData;
  }

  if (action.type === ActionTypes.AUTH_LOGOUT) {
    return initialAuthData;
  }

  return state;
};

export default combineReducers({
  status: authStatusReducer,
  data: authDataReducer,
});
