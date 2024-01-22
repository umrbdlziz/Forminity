import { createSlice } from "@reduxjs/toolkit";

const uidSlice = createSlice({
  name: "uid",
  initialState: {
    value: null,
  },
  reducers: {
    SET_USER_ID: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SET_USER_ID } = uidSlice.actions;
export default uidSlice.reducer;
