import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: "",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    content: (state, action) => {
      state.content = action.payload;
    },
    isOpen: (state, action) => {
      state.isOpen = !action.payload;
    },
  },
});

export const { content, isOpen } = modalSlice.actions;

export const ModalReducer = modalSlice.reducer;
