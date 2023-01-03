import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { modalSlice } from './services/modalSlice';
import { languageSlice } from "./services/languageSlice";
import { themeSlice } from "./services/Theme";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: "Auth",
  storage,
  whitelist: ["token"],
};
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Language", "Theme",],
};

const rootReducer = combineReducers({
  [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
  // [authSlice.name]: authSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [languageSlice.name]: languageSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
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

 
