import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    success: false,
    count: null,
    items: {}
};

export const productsFetch  = createAsyncThunk(
    "products/productsFetch",
    async () => {
        let productList;

        await axios.get('https://dummyjson.com/products')
            .then(res => productList = res);
        
        return productList?.data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(productsFetch.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.success = true;
                state.count = payload.products.length;
                state.items = payload;
            })
            .addCase(productsFetch.rejected, (state, { payload }) => {
                state.loading = false
                state.error = true;
            });
    },
});

export default productsSlice.reducer;