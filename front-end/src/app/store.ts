import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import exampleReducer from "../static_module/main/features/example/exampleSlice";
import loginReducer from "../features/login/loginSlice";

export const store = configureStore({
    reducer: {
        example: exampleReducer,
        login: loginReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
