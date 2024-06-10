import { configureStore } from "@reduxjs/toolkit";
import radioSelectionReducer from "./slices/radioSelectionSlice"
import noteReducer from "./slices/noteSlice"

export const store = configureStore({
    reducer: {
        radioSelection: radioSelectionReducer,
        note: noteReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch