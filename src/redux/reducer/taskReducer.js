import { createSlice } from "@reduxjs/toolkit";

// Initial states constructed
const initialState = {
    data: [],
}


//redux slices are made
export const taskDetail = createSlice({
    name: "taskSlice",
    initialState,
    reducers: {
        setData: (state,action) => {
            state.data =[...state.data, ...action.payload]
        },
        delData: (state,action) => {
            state.data =action.payload
        },
    }
})


export const { setData, delData} = taskDetail.actions;
export default taskDetail.reducer;