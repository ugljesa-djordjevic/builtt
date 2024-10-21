import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;