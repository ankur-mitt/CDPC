import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogin: false,
        // user: null,
        // token: null,
    },
    reducers: {
        loginAction: (state, action: PayloadAction<any>) => {
            console.log(action.payload);
            state.isLogin = true;
            // state.user = action.payload.email;
            // state.token = action.payload.token;
        },
        logoutAction: (state) => {
            state.isLogin = false;
            // state.user = null;
            // state.token = null;
        }
    }
});

export const { loginAction, logoutAction } = loginSlice.actions;

export default loginSlice.reducer;