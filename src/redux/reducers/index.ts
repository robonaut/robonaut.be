import { combineReducers } from "redux";

import auth from "./auth";
import errors from "./errors";

export const rootReducer = combineReducers({
  auth,
  errors,
});

export type RootState = ReturnType<typeof rootReducer>;
