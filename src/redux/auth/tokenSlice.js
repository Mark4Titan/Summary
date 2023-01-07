import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "Token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    nullToken: (state, action) => {
      state.token = null;
    },
  },
});

export const { setToken, nullToken } = tokenSlice.actions;

export const authReducer = tokenSlice.reducer;
