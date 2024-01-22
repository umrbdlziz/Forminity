import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import formReducer from "./formSlice";
import displayReducer from "./displaySlice";
import uidReducer from "./uidSlice";

const store = configureStore({
  reducer: {
    item: itemReducer,
    form: formReducer,
    display: displayReducer,
    uid: uidReducer,
  },
});

export default store;
