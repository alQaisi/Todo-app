import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentPage:"all",
}

export const uiSlice=createSlice({
    name:"ui",
    initialState,
    reducers:{
        setCurrentPage:(state,action)=>{
            state.currentPage=action.payload
        },
    },
});

export const { setCurrentPage } =uiSlice.actions;
export default uiSlice.reducer;