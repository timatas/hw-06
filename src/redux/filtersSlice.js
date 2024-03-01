import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    newSearch: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { newSearch } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

//  export const fitersReducer = createReducer(filtersInitialState, (builder) => {
//   builder.addCase(newSearch, (state, action) => {
//     state.name = action.payload;
//   });
// });
