export type UnknownRecord = Record<string, unknown>;

export enum ActionTypes {
  APP_BOOTSTRAP = 'WWS/APP/BOOTSTRAP',
  AUTH_LOGIN = 'WWS/AUTH/LOGIN',
  AUTH_LOGOUT = 'WWS/AUTH/LOGOUT',
  AUTH_GET_USER = 'WWS/AUTH/USER/GET',
  CONTACT_SUBMIT = 'WWS/CONTACT/SUBMIT',
  API_ERROR = 'WWS/API/ERROR',
  API_SUCCESS = 'WWS/API/SUCCESS',
  ERRORS_DISMISS = 'WWS/ERRORS/DISMISS',
}

export interface Action {
  type: ActionTypes;
  payload: ActionPayload;
}

export interface ActionPayload {
  originalAction?: Action;
  response?: UnknownRecord | UnknownRecord[];
  error?: UnknownError;
  [k: string]: unknown;
}

export interface UnknownError {
  [k: string]: unknown;
  message?: string;
  url?: string;
  details?: ErrorDetail[];
  status?: number;
  statusCode?: number;
  name?: string;
}

export interface ErrorDetail {
  message: string;
}

export interface ApiCallPayload {
  data?: ActionPayload;
  token?: string;
}

export interface ApiCallPayload {
  data?: ActionPayload;
  token?: string;
}

export interface ApiResponse {
  response?: UnknownRecord;
  error?: UnknownRecord;
  url?: string;
}

export interface ApiResponseActionPayload extends ApiResponse {
  originalAction: Action;
}
