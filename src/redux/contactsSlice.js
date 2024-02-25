import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const contactsInitialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        value: state.value,
      };
    case "contatcs/deleteContact":
      return {
        ...state,
        value: state.value,
      };
    default:
      return state;
  }
};

export const addig = (value) => {
  return {
    type: "contacts/adding",
    payload: value,
  };
};

export const deleting = (value) => {
  return {
    type: "contacts/deleting",
    payload: value,
  };
};
