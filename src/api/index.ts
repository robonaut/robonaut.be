import {
  AUTH_LOGIN_URL,
  AUTH_USER_URL,
  CONTACT_SUBMIT_URL,
} from "../constants";
import log from "../log";
import { ApiCallPayload, ApiResponse } from "../typings";

// Base API Request
async function apiRequest(
  url: string,
  token: string | undefined,
  options: RequestInit
): Promise<ApiResponse> {
  const defaultHeaders: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  }

  const defaultRequestOptions: RequestInit = {
    mode: "cors",
    headers: new Headers(defaultHeaders),
  };

  try {
    const requestOptions = {
      ...defaultRequestOptions,
      ...options,
    };

    const response = await fetch(url, requestOptions);
    const json = response.status === 204 ? {} : await response.json();

    if (!response.ok) {
      return { error: { ...json, url } };
    }

    return { response: json };
  } catch (error) {
    log.error(error);
    if (error.message && error.stack) {
      return {
        error: { message: error.message, url },
      };
    }

    return { error, url };
  }
}

// Exports
export const getUser = ({ token }: ApiCallPayload): Promise<ApiResponse> => {
  const options = {
    method: "GET",
  };

  return apiRequest(AUTH_USER_URL, token, options);
};

export const loginUser = ({
  data,
  token,
}: ApiCallPayload): Promise<ApiResponse> => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };

  return apiRequest(AUTH_LOGIN_URL, token, options);
};

export const submitContactForm = ({
  data,
  token,
}: ApiCallPayload): Promise<ApiResponse> => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };

  return apiRequest(CONTACT_SUBMIT_URL, token, options);
};
