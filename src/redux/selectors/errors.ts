import { createSelector } from "reselect";

import { RootState } from "../reducers";

export const errorsSelector = createSelector(
  (state: RootState) => state.errors.history,
  (errors) => errors
);

export const showErrorsSelector = createSelector(
  (state: RootState) => state.errors.show,
  (showErrors) => showErrors
);
