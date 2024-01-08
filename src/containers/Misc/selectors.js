import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import { isUsersSliceLoadingSelector } from "containers/Users/selectors";

export const miscSelector = (state) => state[SLICE_NAME];

export const isAppLoadingSelector = createSelector(
  isUsersSliceLoadingSelector,

  (...loadingStates) => loadingStates.some((loading) => loading)
);
