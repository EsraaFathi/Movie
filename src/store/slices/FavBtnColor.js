import { createSlice } from "@reduxjs/toolkit"


const FavBtnColor = createSlice({
  name: "color",
  initialState: { color: 'absolute top-2 rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2' },
  reducers: {
    changeColor: function (state, action) {
      state.language = action.payload
    }
  }
})
export const {changeColor} = FavBtnColor.actions   //{}


export default FavBtnColor.reducer
