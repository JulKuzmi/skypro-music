import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./slices/reducers";
import { favoriteTracksApi } from "../services/tracks";
import { authReducer } from "./slices/auth";
export const store = configureStore({
  reducer: {
    track: trackReducer,
    auth: authReducer,
    [favoriteTracksApi.reducerPath]: favoriteTracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoriteTracksApi.middleware),
});
