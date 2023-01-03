import { createSlice } from '@reduxjs/toolkit';
import { ConstantThemse } from "../../components/Theme/Constant";

const initialState = {
  theme: Object.keys(ConstantThemse)[0],
};

export const themeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setThemeActions: (state, action) => {
     state.theme = action.payload;
    },
  },
});

export const { setThemeActions } = themeSlice.actions;

export const ThemeReducer = themeSlice.reducer;

export const getTheme = (state) => state.Theme;
