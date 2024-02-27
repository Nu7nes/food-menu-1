import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";



const initialState: FieldValues[] = [];

export const cartSlice = createSlice({
    name: "data/cartSlice",
    initialState,
    reducers: {
        addItemOnCart: (state, { payload }: PayloadAction<FieldValues>) => {
            state.push(payload)
        },
    },
});

export const { addItemOnCart } = cartSlice.actions;

export default cartSlice.reducer;
