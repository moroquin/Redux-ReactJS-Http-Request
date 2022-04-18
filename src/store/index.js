import  { configureStore } from "@reduxjs/toolkit";
import genderSlice from './gender-slice';

const store = configureStore({
    reducer: {
        gender: genderSlice.reducer
    }
});

export default store;