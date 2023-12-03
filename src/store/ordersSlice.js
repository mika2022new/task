import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ordersList:[],
    isLoading:true,
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setAllOrders: (state, action) => {
            state.ordersList = action.payload;
            state.isLoading = false;
        },
    },
});

export const {setAllOrders} = ordersSlice.actions;
export const {reducer: ordersReducer} = ordersSlice;
