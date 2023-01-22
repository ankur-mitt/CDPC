import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LoginType } from "../../types/logintype";

const initialState: LoginType = {
    islogin: false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginAction: (state, action: PayloadAction<any>) => {
            state.islogin = true;
            // console.log("loginAction: ", action.payload);
            // state.user = action.payload.user;
            // state.token = action.payload.token;
        },
        logoutAction: (state) => {
            state.islogin = false;
            // state.user = "";
            // state.token = "";
        }
    }
});

export const { loginAction, logoutAction } = loginSlice.actions;

export default loginSlice.reducer;