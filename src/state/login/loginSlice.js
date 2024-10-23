import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userInfo: {
        email: "ugljesadjordjevic@gmail.com",
        password: "Ugi12345!",
    }, // for hardcoded user object
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