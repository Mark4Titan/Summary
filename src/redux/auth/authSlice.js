import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './authOperations';

export const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  pendingUserData: false,
  currentPath: null,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
  incrementByAmount: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.currentPath = null;
    },
    [authOperations.fetchCurrentUser.pending]: (state, _) => {
      state.pendingUserData = true;
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.pendingUserData = false;
    },
    [authOperations.fetchCurrentUser.rejected]: (state) => {
      state.pendingUserData = false;
    },
  },
});

export const { setPath } = authSlice.actions;

export const authReducer = authSlice.reducer;
