import { combineReducers } from "redux";

import auth from "./auth";
import contact from "./contact";
import errors from "./errors";

export const rootReducer = combineReducers({
  auth,
  contact,
  errors,
});

export type RootState = ReturnType<typeof rootReducer>;
