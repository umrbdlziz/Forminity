import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import formReducer from "./formSlice";

const store = configureStore({
  reducer: {
    item: itemReducer,
    form: formReducer,
  },
});

export default store;
