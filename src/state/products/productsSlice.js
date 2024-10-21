import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    products: {}
};

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
                state.products = payload;
            })
            .addCase(productsFetch.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            });
    },
});

export const productsFetch  = createAsyncThunk(
    "products/fetchApi",
    async () => {
        let productList;
        await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => productList = data);
        .catch(err => err.message)

        return productList;
    }
);

export default productsSlice.reducer;