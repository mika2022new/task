const init = {
    ordersList:[],
    isLoading:true
}

export function reducerOrders(state=init, actions) {
    if (actions.type === "setAllOrders") {
        const newState = {ordersList:actions.payload, isLoading:false}
    return newState;
    }

    return state;
}