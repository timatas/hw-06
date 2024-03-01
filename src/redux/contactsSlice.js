import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;

const persistContactsConfig = {
  key: "contactsKey",
  storage,
};

export const contactsReducer = persistReducer(
  persistContactsConfig,
  contactsSlice.reducer
);

//export const contactsReducer = contactsSlice.reducer;

// export const contactsReducer = createReducer(
//   contactsInitialState,
//   (builder) => {
//     builder
//       .addCase(addContact, (state, action) => {
//         state.items.push(action.payload);
//       })

//       .addCase(deleteContact, (state, action) => {
//         state.items = state.items.filter((item) => item.id !== action.payload);
//       });
//   }
// );
