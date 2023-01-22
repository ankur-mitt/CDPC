import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { LoginType } from "../../types/logintype";

const initialState: LoginType = {
    islogin: false,
    user: "",
    token: ""
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginAction: (state) => {
            state.islogin = true;
        },
        logoutAction: (state) => {
            state.islogin = false;
        }
    }
});

export const selectlogin = (state: RootState) => state.login.islogin;

export const { loginAction, logoutAction } = loginSlice.actions;

export default loginSlice.reducer;
