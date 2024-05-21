import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.user = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        // state.user.name = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
        state.user = null;
        // state.user.name = null;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        // state.user.name = null;
        state.isRefreshing = false;
        state.token = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        // state.user.name = action.payload.name;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = null;
        // state.user.name = null;
        state.isRefreshing = false;
      })
      .addCase(logout.pending, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
        state.user = action.payload;
        // state.user.email = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
        state.user = null;
      })
      .addCase(refreshUser.pending, (state, action) => {
        // state.isLoggedIn = false;
        // state.token = action.payload.token;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        // state.token = null;
        state.user = action.payload;
        // state.user.name = action.payload.name;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        // state.isLoggedIn = false;
        state.isRefreshing = false;
        // state.token = null;
        // state.user.email = null;
        // state.user.name = null;
      });
  },
});

export const authReducer = authSlice.reducer;
