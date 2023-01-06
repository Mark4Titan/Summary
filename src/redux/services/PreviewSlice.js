import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preview: "Desctop",
};

export const PreviewSlice = createSlice({
  name: "Preview",
  initialState,
  reducers: {
    setPreviewActions: (state, action) => {
      state.preview = action.payload;
    },
  },
});

export const { setPreviewActions } = PreviewSlice.actions;

export const PreviewReducer = PreviewSlice.reducer;

export const getPreview = (state) => state.Preview;
