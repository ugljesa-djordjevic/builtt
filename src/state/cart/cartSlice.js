import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: localStorage.getItem('cart-content') ? JSON.parse(localStorage.getItem('cart-content')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, { payload }) {
            const itemIndex = state.cartItems.findIndex(item => item.id === payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            } 

            localStorage.setItem('cart-content', JSON.stringify(state.cartItems));
        },
        removeFromCart(state, { payload }) {
            const filteredCartItems = state.cartItems.filter((el) => el.id !== payload.id);
            state.cartItems = filteredCartItems;

            localStorage.setItem('cart-content', JSON.stringify(state.cartItems));
        },
        decreaseCart(state, { payload }) {
            const itemIndex = state.cartItems.findIndex(item => item.id === payload.id);
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const filteredCartItems = state.cartItems.filter((el) => el.id !== payload.id);
                state.cartItems = filteredCartItems;
            }
            localStorage.setItem('cart-content', JSON.stringify(state.cartItems));
        },
    },
});

export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;