import { combineReducers } from 'redux';

import type { Action, ActionPayload, UnknownError } from '../../typings';
import { ActionTypes } from '../../typings';

const initialFormState: {
  error?: UnknownError;
  response?: ActionPayload['response'];
} = {
  error: undefined,
  response: undefined,
};
const formStateReducer = (state = initialFormState, action: Action): typeof initialFormState => {
  if (action.type === ActionTypes.APP_BOOTSTRAP) {
    return initialFormState;
  }
  if (
    action.type === ActionTypes.API_SUCCESS &&
    action.payload.originalAction?.type === ActionTypes.CONTACT_SUBMIT
  ) {
    return {
      ...initialFormState,
      ...action.payload,
    };
  }

  if (
    action.type === ActionTypes.API_ERROR &&
    action.payload.originalAction?.type === ActionTypes.CONTACT_SUBMIT
  ) {
    return {
      ...initialFormState,
      ...action.payload,
    };
  }

  return state;
};

export default combineReducers({
  formState: formStateReducer,
});
