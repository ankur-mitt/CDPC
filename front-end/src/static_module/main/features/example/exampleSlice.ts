import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = "initialState";

export const exampleSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setExampleAction: (state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
});

export const { setExampleAction } = exampleSlice.actions;

export default exampleSlice.reducer;
