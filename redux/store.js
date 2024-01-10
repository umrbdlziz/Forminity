import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import formReducer from "./formSlice";
import displayReducer from "./displaySlice";

const store = configureStore({
  reducer: {
    item: itemReducer,
    form: formReducer,
    display: displayReducer,
  },
});

export default store;
