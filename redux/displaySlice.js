import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    userid: "",
    formId: "",
    name: "",
    description: "",
    category: "",
    itemId: "",
  },
  reducers: {
    setUserId: (state, action) => {
      state.userid = action.payload;
    },
    setFormId: (state, action) => {
      state.formId = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    setItemId: (state, action) => {
      state.itemId = action.payload;
    },
    clearForm: (state) => {
      state.name = "";
      state.description = "";
      state.category = "";
    },
  },
});

export const {
  setUserId,
  setFormId,
  setName,
  setDescription,
  addCategory,
  setItemId,
  clearForm,
} = displaySlice.actions;
export default displaySlice.reducer;
