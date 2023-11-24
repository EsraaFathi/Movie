
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({

  name: 'Favorites',
  initialState: {Favorites:[]},
  reducers: {
// var isFavorite;
    addToFavorites: (state, action) => {

        // const index = state.Favorites.find((item) => item.id === action.payload.id);
        // const isFavorite =state.Favorites.some((product) => product.id === action.payload.id);

        // if (!index ) {
            state.Favorites.push(action.payload);
            
        // }

    },
    removeFromFavorites: (state, action) => {

      const index = state.Favorites.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.Favorites.splice(index, 1);
      }
    },


  //   toggleProduct: (state, action) => {

  //   const movie=action.payload;
  //   const index = state.Favorites.findIndex((item) => item === action.payload);


  //     if (index !== -1) {
  //       state.Favorites.splice(index, 1);
  //     }else {
  //       state.Favorites.push(movie);

  //     }
     
 
  
  // },
  }
})
 



export const { addToFavorites, removeFromFavorites,toggleProduct } = favoritesSlice.actions;
export default favoritesSlice.reducer;