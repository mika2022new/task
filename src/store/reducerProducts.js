const init = {
    productsList:[],
    isLoading:true,
    types:[],
}

export function reducerProducts(state=init, actions) {
    if (actions.type === "setAllProducts") {
        const data = actions.payload;
        const typesList = data.map((item) => item.type);
        const setType = new Set(typesList);
        const newState = {productsList:data, isLoading: false, types: [...setType] };
    return newState;
    }

    return state;

}