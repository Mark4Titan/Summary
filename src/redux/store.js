import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { tokenSlice } from "./auth/tokenSlice";
import { modalSlice } from "./services/modalSlice";
import { languageSlice } from "./services/languageSlice";
import { themeSlice } from "./services/ThemeSlice";
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

// const authPersistConfig = {
//   key: "Auth",
//   storage,
// whitelist: ["token"],
// };
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["Language", "Theme", "Token"],
  // whitelist: [{Auth: ['token']}],
  // blacklist: ["name"],
  // blacklist: ["Auth.user"],
};

const rootReducer = combineReducers({
  // [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
  [authSlice.name]: authSlice.reducer,
  [tokenSlice.name]: tokenSlice.reducer,
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
