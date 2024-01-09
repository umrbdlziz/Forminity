import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    description: "",
    category: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    clearForm: (state) => {
      state.name = "";
      state.description = "";
      state.category = "";
    },
  },
});

export const { setName, setDescription, addCategory, clearForm } =
  formSlice.actions;
export default formSlice.reducer;
