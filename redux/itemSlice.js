import { createSlice, nanoid } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    itemAdded: {
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
    itemDeleted: {
      reducer: (state, action) => {
        return state.filter((e) => e.id !== action.payload.id);
      },
      prepare: (id) => {
        return { payload: { id } };
      },
    },
    itemEdited: {
      reducer: (state, action) => {
        const { type, id, newTitle, newOptions } = action.payload;
        const toEdit = state.find((form) => form.id === id);

        if (toEdit) {
          toEdit.title = newTitle;
          type !== "shortAnswer" ? (toEdit.options = newOptions) : {};
        }
      },
      prepare: (type, id, newTitle, newOptions) => {
        return { payload: { type, id, newTitle, newOptions } };
      },
    },
    clearItem: (state) => {
      return (state = []);
    },
  },
});

export const { itemAdded, itemDeleted, itemEdited, clearItem } =
  itemSlice.actions;
export default itemSlice.reducer;
