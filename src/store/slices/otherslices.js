import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openSidebar: "",
    handleSidebar: "",
    opencart: false,
    updatetotal: false,
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
        OPENCART : (state, action) => {
           state.opencart = action.payload;
        },
        UPDATECART : (state, action) => {
           state.updatetotal = action.payload;
        },
     }
})

export const { HANDLESIDEBAR, OPENSIDEBAR, OPENCART, UPDATECART } = otherSlice.actions;

export default otherSlice.reducer;