import { createSelector } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

export const usersSelector = (state) => state[SLICE_NAME];

export const isThisVUserAuthenticatedSelector = createSelector(
  usersSelector,
  (usersState) => {
    return usersState.isThisUserAuthenticated;
  }
);

export const isUsersSliceLoadingSelector = createSelector(
  usersSelector,
  (usersState) => {
    return usersState.isUsersReducerLoading;
  }
);
