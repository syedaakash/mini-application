import { configureStore } from "@reduxjs/toolkit";
import radioSelectionReducer from "./slices/radioSelectionSlice"

export const store = configureStore({
    reducer: {
        radioSelection: radioSelectionReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch