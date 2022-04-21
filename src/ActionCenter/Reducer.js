import { ACTIONS } from "./Action"

export const INITIALSTATE = {
    isLoading: true,
    products: [],
    searchKeyWord: '',
    fetchingOffset: 0,

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
    return {
        ...state,
        products: [...new Set([...state.products, ...payload])]
    }
}
function setFetchOffsetNumber(state, payload) {
    console.log("fetchingOffset in payload", payload);
    return {
        ...state,
        fetchingOffset: payload
    }
}
function setSearch(state, payload) {
    return {
        ...state,
        searchKeyWord: payload
    }
}
