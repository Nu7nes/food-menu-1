import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";

interface CartItemType {
    flavor: string;
    price: number;
}

const initialState: FieldValues[] = [];

export const cartSlice = createSlice({
    name: "data/cartSlice",
    initialState,
    reducers: {
        addItemOnCart: (state, { payload }: PayloadAction<FieldValues>) => {
            state.push(payload);
        },
        removeItemOnCart: (state, { payload }: PayloadAction<CartItemType>) => {
            const index = state.findIndex(
                (item) =>
                    item.flavor === payload.flavor &&
                    item.price === payload.price
            );
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addItemOnCart, removeItemOnCart } = cartSlice.actions;

export default cartSlice.reducer;
