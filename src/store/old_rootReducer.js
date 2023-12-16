import { combineReducers } from "redux";

import { reducerOrders } from "./old_reducerOrders";
import { reducerProducts } from "./old_reducerProducts";

export const rootReducer = combineReducers({
    orders: reducerOrders,
    products: reducerProducts
});

