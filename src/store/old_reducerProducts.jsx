const init = {
    productsList:[],
    isLoading:true,
    isErrors: false,
    error: null,
    types:[],
}

export function reducerProducts(state=init, actions) {
    if (actions.type === "setAllProducts") {
        const data = actions.payload;
        const typesList = data.map((item) => item.type);
        const setType = new Set(typesList);
        const newState = {productsList:data, isErrors: false, error: null, isLoading: false, types: [...setType] };
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

    if (actions.type === "delete") {
        const newList = state.productsList.filter(item => String(item.id) !== String(actions.payload));
        const newState = {...state, isErrors: false, error: null, productsList: newList};
        return newState;

    }

    return state;
}

export const fetchAllProducts = (dispatch, getState) => {
    dispatch({ type: "setLoading", payload: true});
    fetch("http://localhost:3002/products")
    .then((respons) => respons.json())
    .then((data) => {
      dispatch({ type: "setAllProducts",payload:data});
      dispatch({ type: "setLoading", payload: false});
    })
    .catch((err) => {
        dispatch({ type: "setLoading", payload: false});
        dispatch({type:"setError",payload:err});
    });
};


export const deleteProductByID = (id) => (dispatch, getState) => {
    dispatch({ type: "setLoading", payload: true});

    fetch(`http://localhost:3002/products/delete?id=${id}`)
    .then(resp => resp.json())
    .then(data => {

        console.log("1", data);

        if(data) {
            console.log(`id ${id} deleted`);
            dispatch({ type: "delete", payload: id});
            dispatch({ type: "setLoading", payload: false});

        }
    })
    .catch(err => {
        console.log("2", err);
        console.log("err", err);

        dispatch({type:"setError",payload:err});
        dispatch({ type: "setLoading", payload: false});
    });
};