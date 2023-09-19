import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./reducers/reducers";

const store = configureStore({ reducer: musicReducer });

export default store;
