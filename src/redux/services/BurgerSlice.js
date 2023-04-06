import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  burger: false,
};

export const burgerSlice = createSlice({
  name: "Burger",
  initialState,
  reducers: {
    setBurgerActions: (state, action) => {
      state.burger = action.payload;
    },
  },
});

export const { setBurgerActions } = burgerSlice.actions;

export const burgerReducer = burgerSlice.reducer;

export const getBurger = (state) => state.Burger;
