import { createSlice } from "@reduxjs/toolkit";

const allFormSlice = createSlice({
  name: "allForm",
  initialState: {
    value: [],
  },
  reducers: {
    SET_ALLFORM: (state, action) => {
      state.value.push({
        formId: action.payload.id,
        formName: action.payload.name,
        formDescription: action.payload.description,
        formCategory: action.payload.category,
      });
    },
    CLEAR_ALLFORM: (state) => {
      state.value = [];
    },
  },
});

export const { SET_ALLFORM, CLEAR_ALLFORM } = allFormSlice.actions;
export default allFormSlice.reducer;
