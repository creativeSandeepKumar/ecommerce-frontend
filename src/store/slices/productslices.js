import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    iscategoryupdtated: "",
    iscategorycreated: "",
    isactiveofferupdtated: "",
    isactiveoffercreated: "",
    message: "",
}

const productSlice = createSlice({
    name: "productreducer",
    initialState,
    reducers: {
        IsCategoryUpdtated : (state, action) => {
           state.iscategoryupdtated = action.payload;
        },
        IsCategoryCreated : (state, action) => {
           state.iscategorycreated = action.payload;
        },
        IsActiveofferUpdtated : (state, action) => {
           state.isactiveofferupdtated = action.payload;
        },
        IsActiveofferCreated : (state, action) => {
           state.isactiveoffercreated = action.payload;
        },
        MESSAGE : (state, action) => {
           state.message = action.payload;
        },
     }
})

export const { IsCategoryUpdtated, IsCategoryCreated, IsActiveofferCreated, IsActiveofferUpdtated, MESSAGE} = productSlice.actions;

export default productSlice.reducer;