import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { languageSlice } from "./services/languageSlice";
import { themeSlice } from "./services/ThemeSlice";
import { burgerSlice } from "./services/BurgerSlice";
import { PreviewSlice } from "./services/PreviewSlice";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["Language", "Theme", "Preview", "Burger"],
};

const rootReducer = combineReducers({
  [languageSlice.name]: languageSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [burgerSlice.name]: burgerSlice.reducer,
  [PreviewSlice.name]: PreviewSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});
export const persistor = persistStore(store);
export default store;
