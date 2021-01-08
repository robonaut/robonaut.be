import { createSelector } from "reselect";

import { RootState } from "../reducers";

export const formStateSelector = createSelector(
  (state: RootState) => state.contact.formState,
  (formState) => formState
);
