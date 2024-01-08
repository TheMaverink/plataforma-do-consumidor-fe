import { createAsyncThunk } from "@reduxjs/toolkit";

import { setAuthToken } from "utils/setAuthToken";
import { userLoginApi, isUserLoggedInApi } from "./api";

export const loginUserAction = createAsyncThunk(
  "users/login",
  async (payload, { rejectWithValue }) => {
    try {
      const userLoginApiResponse = await userLoginApi(payload);

      if (userLoginApiResponse?.data?.token) {
        localStorage.setItem("token", userLoginApiResponse.data.token);
        setAuthToken(userLoginApiResponse.data.token);
        return userLoginApiResponse.data;
      } else {
        return rejectWithValue("Something went wrong with the authentication");
      }
    } catch (error) {
      console.log("loginUserAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUserAction = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("token");
    } catch (error) {
      console.log("logoutUserAction error!", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const isUserLoggedInAction = createAsyncThunk(
  "users/isLoggedIn",
  async (_, thunkApi) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return {
          isUserLoggedIn: false,
          user: null,
        };
      } else {
        const isUserLoggedInApiResponse = await isUserLoggedInApi();

        setAuthToken(token);

        return isUserLoggedInApiResponse.data;
      }
    } catch (error) {
      console.log("logoutUserAction error!", error);
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
