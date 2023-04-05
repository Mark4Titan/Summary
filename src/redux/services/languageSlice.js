import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "SummaryEN",
};

export const languageSlice = createSlice({
  name: "Language",
  initialState,
  reducers: {
    setLanguageActions: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguageActions } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;

export const getLanguage = (state) => state.Language;
