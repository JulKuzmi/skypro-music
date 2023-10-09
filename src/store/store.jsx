import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./slices/reducers";
export const store = configureStore({
  reducer: {
    track: trackReducer,
  },
});
