import { createSlice } from "@reduxjs/toolkit";
const genderlistSlice = createSlice({
    name: "genderlist",
    initialState:{
        list: [],
        id: 0
    },
    reducers:{
        addItem(state, action){
            state.id = state.id+1;
            state.list.push({id: state.id, text: action.payload.item});
            

        },
        removeItem(state, action){
            state.list = state.list.filter(item => item.id !== action.payload.id);
        }
    }
});

export const genderlistActions = genderlistSlice.actions;

export default genderlistSlice;