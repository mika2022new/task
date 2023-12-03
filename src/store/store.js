// import { createStore } from "redux";
// import { rootReducer } from "./rootReducer";

// import { reducerOrders } from './reducerOrders';
// import { reducerProducts } from './reducerProducts';

// export const store = createStore(rootReducer);

import { configureStore } from '@reduxjs/toolkit';

import { ordersReducer } from './ordersSlice';
import { productsReducer } from './productsSlice';


export const store = configureStore({
    reducer: {
        orders: ordersReducer,
        products: productsReducer,
    },
});
