// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axiosInstance from './../../axiosConfig/instance';

// // createAsyncThunk()>>>return action{pendinng >>resolving||rejected}
// export const productsAction=createAsyncThunk("products/getall", async () => {
//     const res = await axiosInstance.get("/movie/popular")
//     return res.data.results
// })


// const productsSlice = createSlice({
//     name: "products",
//     initialState: { products: []},

//     // extraReducers :function(object)>>called after response from api
//     extraReducers:(builder)=>{

//        builder.addCase(productsAction.fulfilled,(state,action)=>{
//           state.products=action.payload
//        })

//     //    builder.addCase(productsAction.rejected,(state,action)=>{
         
//     //    })
//     }
// })


// export default productsSlice.reducer








import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchProducts } from './productService';
import axiosInstance from './../../axiosConfig/instance';

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
});

export const { setSearchQuery, filterProducts } = productsSlice.actions;
export default productsSlice.reducer

// export default productsSlice.reducer;


