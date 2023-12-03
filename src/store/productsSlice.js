import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsList:[],
    isLoading:true,
    types:[],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            
            const data = action.payload;
            const typesList = data.map((item) => item.type);
            const setType = new Set(typesList);

            state.productsList = data,
            state.isLoading = false;
            state.types = [...setType];

        },
    },
});

export const {setAllProducts} = productsSlice.actions;
export const {reducer: productsReducer} = productsSlice;