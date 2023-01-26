import { createSlice } from "@reduxjs/toolkit";
import { LoginType } from "../../types/login";

const initialState: LoginType = {
    isLogin: false,
    user: "",
    token: ""
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginAction: (state) => {
            state.isLogin = true;
        },
        logoutAction: (state) => {
            state.isLogin = false;
        }
    }
});


export const { loginAction, logoutAction } = loginSlice.actions;

export default loginSlice.reducer;
