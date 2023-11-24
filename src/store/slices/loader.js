import { createSlice } from "@reduxjs/toolkit";

const loaderSliceSpinner= createSlice({

    name:"loaderSpinner",
    initialState:{loaderSpinner:false},
    reducers:{
        changeLoaderSpiner:function(state,action){
            state.loaderSpinner=action.payload
        }
    }
})


export const {changeLoaderSpiner}=loaderSliceSpinner.actions
export default loaderSliceSpinner.reducer