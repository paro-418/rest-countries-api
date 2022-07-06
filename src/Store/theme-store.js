import { createSlice } from "@reduxjs/toolkit";


const initialState = { light:true};
const themeSlice = createSlice({
    name : "theme",
    initialState:initialState,
    reducers:{
        toggleTheme(state){
            state.light = !state.light;
        }
    }
})


export const themeSliceActions = themeSlice.act;
export default themeSlice;