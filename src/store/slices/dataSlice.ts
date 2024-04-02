import { DocumentData } from "firebase/firestore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dataStateResponse {
    menu: DocumentData;
    adds: DocumentData;
    posts: DocumentData;
}

const initialState: dataStateResponse = {
    menu: [],
    adds: [],
    posts: [],
};

export const dataSlice = createSlice({
    name: "data/dataSlice",
    initialState,
    reducers: {
        addData: (state, { payload }: PayloadAction<dataStateResponse>) => {
            state.menu = payload.menu;
            state.adds = payload.adds[0];
            state.posts = payload.posts;
        },
    },
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
