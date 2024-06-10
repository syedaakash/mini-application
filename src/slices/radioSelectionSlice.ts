import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RadioSelectionState {
    selectedOption: string;
}

const initialState: RadioSelectionState = {
    selectedOption: 'Option A'
}

const radioSelectionSlice = createSlice({
    name: 'radioSelection',
    initialState,
    reducers: {
        setSelectedOption(state, action: PayloadAction<string>) {
            state.selectedOption = action.payload
        }
    }
})


export const { setSelectedOption } = radioSelectionSlice.actions;
export default radioSelectionSlice.reducer;