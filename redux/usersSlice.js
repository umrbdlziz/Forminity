import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    SET_USERS: (state, action) => {
      state.value.push({
        id: action.payload.id,
        data: action.payload.data,
      });
    },
    CLEAR_USERS: (state) => {
      state.value = [];
    },
  },
});

export const { SET_USERS, CLEAR_USERS } = usersSlice.actions;
export default usersSlice.reducer;
