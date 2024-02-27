import { DocumentData } from "firebase/firestore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dataStateResponse {
    menu: DocumentData;
    adds: DocumentData;
}

const initialState: dataStateResponse = {
    menu: [],
    adds: [],
};

export const dataSlice = createSlice({
    name: "data/dataSlice",
    initialState,
    reducers: {
        addData: (state, { payload }: PayloadAction<dataStateResponse>) => {
            state.menu = payload.menu;
            state.adds = payload.adds[0];
        },
    },
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
