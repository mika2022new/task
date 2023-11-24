import { combineReducers } from "redux";

import { reducerOrders } from "./reducerOrders";
import { reducerProducts } from "./reducerProducts";

export const rootReducer = combineReducers({
    orders: reducerOrders,
    products: reducerProducts
});

