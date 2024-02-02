import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openSidebar: "",
    handleSidebar: "",

}

const otherSlice = createSlice({
    name: "otherreducers",
    initialState,
    reducers: {
        OPENSIDEBAR : (state, action) => {
           state.openSidebar = action.payload;
        },
        HANDLESIDEBAR : (state, action) => {
           state.handleSidebar = action.payload;
        },
     }
})

export const { HANDLESIDEBAR, OPENSIDEBAR } = otherSlice.actions;

export default otherSlice.reducer;