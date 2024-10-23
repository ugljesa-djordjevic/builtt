import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/loginSlice';
import productsReducer, { productsFetch } from './products/productsSlice';
import cartReducer from './cart/cartSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        products: productsReducer,
        cart: cartReducer,
    },
});

store.dispatch(productsFetch());