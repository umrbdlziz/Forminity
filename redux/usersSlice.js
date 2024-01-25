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
  },
});

export const { SET_USERS } = usersSlice.actions;
export default usersSlice.reducer;
