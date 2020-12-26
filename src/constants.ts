import config from "./config";

export const LOCALSTORAGE_KEY = "robonaut.store";

export const API_ENDPOINT = `${config.API_HOST}`;

export const AUTH_LOGIN_URL = `${API_ENDPOINT}/users/login`;

export const AUTH_USER_URL = `${API_ENDPOINT}/user`;
