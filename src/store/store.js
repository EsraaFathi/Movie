


















import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchProducts } from './productService';
import axiosInstance from './../../src/axiosconfig/instance';

// export const fetchProductsAsync = createAsyncThunk(
//   'product/fetchProducts',
//   async () => {
//     const response = await fetchProducts();
//     return response;
//   }
// );

// createAsyncThunk()>>>return action{pendinng >>resolving||rejected}
export const productsAction=createAsyncThunk("products/getall", async () => {
    const res = await axiosInstance.get("/movie/popular")
    return res.data.results
})

const productsSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    searchQuery: '',
    filteredProducts: [],
    status: 'idle',
    error: null,
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(productsAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productsAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(productsAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    filterProducts: (state) => {
      const filtered = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
      state.filteredProducts = filtered;
    },
  },
});

export const { setSearchQuery, filterProducts } = productsSlice.actions;
// export default productsSlice.reducer



import { configureStore } from "@reduxjs/toolkit";

import loaderSliceSpinnerReducer  from './slices/loader'
// import  productReducer from './slices/products'
import  FavoritesReducer from './slices/favorites'
import FavColorReducer from './slices/FavBtnColor'
import searchReducer from './slices/search'

 const store=configureStore({
    reducer:{
        loaderSpinner:loaderSliceSpinnerReducer,
        products:productsSlice.reducer,
        Favorites:FavoritesReducer,
        FavColor:FavColorReducer,
        search: searchReducer,
    
    }
})

export default store