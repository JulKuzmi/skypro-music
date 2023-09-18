import { configStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = configStore({
  reducer: {},
  middleware: [thunk],
});
