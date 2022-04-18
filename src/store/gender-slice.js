import { createSlice } from "@reduxjs/toolkit";

const genderSlice = createSlice({
  name: "gender",
  initialState: {
    data: { name: "", gender: "", probability: "", count: "" },
  },
  reducers: {
    clear(state, action) {
      state.data.name = "";
      state.data.gender = "";
      state.data.probability = "";
      state.data.count = "";
    },
    setgender(state, action) {
      state.data.name = action.payload.name;
      state.data.gender = action.payload.gender;
      state.data.probability = action.payload.probability;
      state.data.count = action.payload.count;
    },
  },
});

export const genderActions = genderSlice.actions;

export default genderSlice;
