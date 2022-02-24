import * as types from '../types'
import { TodoState } from "../../interfaces/interface-redux";

const initialState: TodoState  = {
    todos: [],
    totalCount: 0,
    pageSize: 15,
    totalPageCount: 0,
    currentPage: 1,
    loading: false,
    error: null
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case types.GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                totalCount: action.payload.length,
                totalPageCount: Math.ceil(action.payload.length/state.pageSize),
                loading: true,
                error: null
            }
        case types.DELETE_TODO_ID: {

            return {
                ...state,
                todos: [...state.todos.filter(el => el.id !== action.payload)],
                totalCount: state.todos.length,
                totalPageCount: Math.ceil(state.todos.length/state.pageSize),
                loading: true,
                error: null
            }
        }
        case types.GET_TODOS_NEW: {
            return {
                ...state,
                todos: action.payload,
                loading: true,
                error: null
            }
        }
        case types.CHANGE_MESSAGE: {
            return {
                ...state,
                todos: [...state.todos.map(todo => todo.id === action.payload.id ? {...todo, title: action.payload.title } : todo)],
                totalCount: state.todos.length,
                loading: true,
                error: null,
            }
        }
        case types.NEW_TODOS: {
            return {...state,
                todos: [...state.todos, action.payload] ,
                    loading: true,
                    error: null,
                    totalCount: state.todos.length,
                    totalPageCount: Math.ceil(state.todos.length/state.pageSize),
                }
        }
        default:
            return state
    }

}
