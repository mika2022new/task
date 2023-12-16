const init = {
    ordersList:[],
    isLoading: true,
    isErrors: false,
    error: null,

}

export function reducerOrders(state=init, actions) {
    if (actions.type === "setAllOrders") {
        const newState = {ordersList:actions.payload,  isErrors: false, error: null, isLoading:false}
    return newState;
    }

    if (actions.type === "setLoading") {
        const newState = {...state, isLoading: actions.payload};
        return newState;
    }
    
    if (actions.type === "setError") {
        const newState = {...state, isErrors: true, error:actions.payload};
        return newState;
    }

    return state;
}

export const fetchAllOrders = (dispatch, getState) => {
    dispatch({ type: "setLoading", payload: true});

    fetch("http://localhost:3002/orders")

    .then((respons) => respons.json())

    .then((data) => {

        dispatch({ type: "setAllOrders",payload:data});
        dispatch({ type: "setLoading", payload: false});

    })
    
    .catch((err) => {
        dispatch({ type: "setLoading", payload: false});
        dispatch({ type: "setError",payload:err })});

};