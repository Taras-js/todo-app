import * as types from '../types'
import { TodoState } from "../../interfaces/interface-redux";



const initialState: TodoState  = {
    todos: [],
    todo: {


    },
    totalCount: 0,
    pageSize: 20,
    totalPageCount: 0,
    currentPage: 1,
    loading: false,
    error: null
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CURRENT_PAGE:
           console.log(action.payload)
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
                loading: true,
                error: null

            }
        }
        case types.GET_TODOS_NEW: {  return {
                ...state,
                todos: action.payload,
                loading: true,
                error: null


            }
        }
        case types.CHANGE_MESSAGE: {

            return {
                ...state,
                todos: [...state.todos.map(todo => todo.id === action.payload.id ? {...todo, title: action.payload.title} : todo)],
                loading: true,
                error: null,

            }
        }
        case types.NEW_TODOS: {
        console.log(action.payload)
                return {...state,
                todos: [...state.todos, state.todos.push(action.payload) ]
                }
        }


        default:
            return state
    }

}
