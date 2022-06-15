import type { Action, ActionPayload, UnknownRecord } from '../typings';
import { ActionTypes } from '../typings';

export const actionCreators = {
  bootstrap: (payload: ActionPayload): Action => ({
    type: ActionTypes.APP_BOOTSTRAP,
    payload,
  }),

  login: (payload: ActionPayload): Action => ({
    type: ActionTypes.AUTH_LOGIN,
    payload,
  }),

  logout: (): Action => ({
    type: ActionTypes.AUTH_LOGOUT,
    payload: {},
  }),

  getUser: (): Action => ({
    type: ActionTypes.AUTH_GET_USER,
    payload: {},
  }),

  apiError: (originalAction: Action, error: UnknownRecord): Action => ({
    type: ActionTypes.API_ERROR,
    payload: {
      originalAction,
      error,
    },
  }),

  apiSuccess: (originalAction: Action, response: UnknownRecord): Action => ({
    type: ActionTypes.API_SUCCESS,
    payload: {
      originalAction,
      response,
    },
  }),

  dismissErrors: (): Action => ({
    type: ActionTypes.ERRORS_DISMISS,
    payload: {},
  }),

  contactSubmit: (payload: ActionPayload): Action => ({
    type: ActionTypes.CONTACT_SUBMIT,
    payload,
  }),
};
