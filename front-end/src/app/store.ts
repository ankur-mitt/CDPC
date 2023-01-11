import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import exampleReducer from "../static_module/main/features/example/exampleSlice";

export const store = configureStore({
    reducer: {
        example: exampleReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
