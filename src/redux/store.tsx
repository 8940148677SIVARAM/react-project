import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./SliceState";
export const facebook = configureStore(
    {
        reducer: {
            facebook: stateSlice,
        },
    }
)