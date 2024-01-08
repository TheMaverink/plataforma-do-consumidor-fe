import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./consts";

import {
  loginUserAction,
  logoutUserAction,
  isUserLoggedInAction,
} from "./actions";

const initialState = {
  usersList: null,
  //this user
  thisUser: null,
  isThisUserAuthenticated: false,
  //misc
  isUsersReducerLoading: false,
};

export const UsersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.isUsersReducerLoading = true;
        state.thisUser = null;
        state.isThisUserAuthenticated = false;
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.isUsersReducerLoading = false;
        state.thisUser = null;
        state.isThisUserAuthenticated = false;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.isUsersReducerLoading = false;
        state.thisUser = action.payload;
        state.isThisUserAuthenticated = true;
      })
      .addCase(logoutUserAction.pending, (state) => {
        state.isUsersReducerLoading = true;
      })
      .addCase(logoutUserAction.rejected, (state) => {
        state.isUsersReducerLoading = false;
      })
      .addCase(logoutUserAction.fulfilled, (state) => {
        state.isUsersReducerLoading = false;
        state.thisUser = null;
        state.isThisUserAuthenticated = false;
      })
      .addCase(isUserLoggedInAction.pending, (state) => {
        state.isUsersReducerLoading = true;
      })
      .addCase(isUserLoggedInAction.rejected, (state) => {
        state.isUsersReducerLoading = false;
      })
      .addCase(isUserLoggedInAction.fulfilled, (state, action) => {

        state.isUsersReducerLoading = false;
        state.isThisUserAuthenticated = action?.payload?.isUserLoggedIn || false;
        state.thisUser = action?.payload?.user || null;
      });
  },
});

export default UsersSlice;
