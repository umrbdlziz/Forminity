import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import formReducer from "./formSlice";
import displayReducer from "./displaySlice";
import uidReducer from "./uidSlice";
import usersReducer from "./usersSlice";
import allFormReducer from "./allFormSlice";

const store = configureStore({
  reducer: {
    item: itemReducer,
    form: formReducer,
    display: displayReducer,
    uid: uidReducer,
    users: usersReducer,
    allForm: allFormReducer,
  },
});

export default store;
