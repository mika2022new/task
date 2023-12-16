import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./old_rootReducer";

import { reducerOrders } from './old_reducerOrders';
import { reducerProducts } from './old_reducerProducts';

import { thunk } from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));

// import { configureStore } from '@reduxjs/toolkit';

// import { ordersReducer } from './ordersSlice';
// import { productsReducer } from './productsSlice';


// export const store = configureStore({
//     reducer: {
//         orders: ordersReducer,
//         products: productsReducer,
//     },
// });



// 1.06