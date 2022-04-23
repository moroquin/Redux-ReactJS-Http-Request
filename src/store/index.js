import  { configureStore } from "@reduxjs/toolkit";
import genderSlice from './gender-slice';
import genderlistSlice from "./genderlist-slice";

const store = configureStore({
    reducer: {
        gender: genderSlice.reducer,
        genderlist: genderlistSlice.reducer
    }
});

export default store;