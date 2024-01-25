import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import formReducer from "./formSlice";
import displayReducer from "./displaySlice";
import uidReducer from "./uidSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
  reducer: {
    item: itemReducer,
    form: formReducer,
    display: displayReducer,
    uid: uidReducer,
    users: usersReducer,
  },
});

export default store;
