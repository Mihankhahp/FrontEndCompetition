import { ACTIONS } from "./Action"

export const InitialState = {
    isLoading: true,
    products: [],
    fecthOffset: 0,
    searchKeyWord: ''

}
export function reducer(state, action) {
    return (ACTION_HANDLERS[action.type])(state, action.payload)
}

const ACTION_HANDLERS = {
    [ACTIONS.setIsLoading]: setLoading,
    [ACTIONS.setProducts]: setProductsData,
    [ACTIONS.setFetchOffset]: setFetchOffsetNumber,
    [ACTIONS.setSearchKeyWord]: setSearch,
}

function setLoading(state, payload) {
    return {
        ...state,
        isLoading: payload
    }
}
function setProductsData(state, payload) {
    console.log("pay", payload);
    return {
        ...state,
        products: [...new Set([...state.products, ...payload])]
    }

}
function setFetchOffsetNumber(state, payload) {
    return {
        ...state,
        fecthOffset: payload
    }
}
function setSearch(state, payload) {
    return {
        ...state,
        searchKeyWord: payload
    }
}
