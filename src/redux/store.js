import { configureStore } from "@reduxjs/toolkit";
import { AdvertSlice } from "./advertsSlice";


export const store = configureStore({
    reducer: {
        adverts: AdvertSlice.reducer,
    },
})