import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import musicReducer from "./slices/reducers";
export const store = configureStore({
  reducer: {
    track: musicReducer,
  },
  middleware: [thunk],
});
