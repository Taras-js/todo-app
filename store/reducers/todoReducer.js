import * as types from '../types'
const initialState = {
    todos: [],
    totalPageCount: 0,
    pageSize: 20,
    currentPage: 1,
    loading: false,
    error: null
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POST_TODOS:
            return {
                ...state,
                todos: [...action.payload],
                loading: true,
                error: null

            }
        default:
            return state
    }

}