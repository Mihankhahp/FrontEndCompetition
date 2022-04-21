export const ACTIONS = {
    setIsLoading: 'setIsLoading',
    setProducts: 'setProducts',
    setFetchOffset: 'setFetchOffset',
    setSearchKeyWord: 'setSearchKeyWord',
}
export const setIsLoading = (data) => ({ type: ACTIONS.setIsLoading, payload: data })
export const setProducts = (data) => ({ type: ACTIONS.setProducts, payload: data })
export const setFetchOffset = (data) => ({ type: ACTIONS.setFetchOffset, payload: data })
export const setSearchKeyWord = (data) => ({ type: ACTIONS.setSearchKeyWord, payload: data })