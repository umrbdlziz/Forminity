import { createSlice, nanoid } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: [],
  reducers: {
    formAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (type, title, options) => {
        const id = nanoid();
        return {
          payload: {
            type,
            id,
            title,
            ...(type !== "shortAnswer" ? { options } : {}),
          },
        };
      },
    },
    formDeleted: {
      reducer: (state, action) => {
        return state.filter((e) => e.id !== action.payload.id);
      },
      prepare: (id) => {
        return { payload: { id } };
      },
    },
    formEdited: {
      reducer: (state, action) => {
        const { type, id, newTitle, newOptions } = action.payload;
        const toEdit = state.find((form) => form.id === id);

        if (toEdit) {
          toEdit.title = newTitle;
          toEdit.options = newOptions;
        }
      },
      prepare: (type, id, newTitle, newOptions) => {
        return { payload: { type, id, newTitle, newOptions } };
      },
    },
  },
});

export const { formAdded, formDeleted, formEdited } = formSlice.actions;
export default formSlice.reducer;
