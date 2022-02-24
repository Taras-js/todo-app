import * as types from "../types";
import axios from "axios";

export const fetchTodos = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => { return response.data})
        dispatch({ type: types.GET_TODOS, payload: response })
}

export const deleteTodos = (id) => async dispatch => {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => { return response.data})
        dispatch({ type: types.DELETE_TODO_ID, payload: id })
}

export const changeTodo = (newMessage, id) => async dispatch => {
    const responseChange = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        id: id,
        title: newMessage})
        .then(response => { return response.data})
        dispatch({ type: types.CHANGE_MESSAGE, payload: responseChange})
}

export const currentPage = (p) => dispatch => {
        dispatch({ type: types.CURRENT_PAGE, payload: p })
}

export const addNewTodo = (newTodo, id) => async dispatch => {

    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {

            userId: 1,
            completed: false,
            title: newTodo,
    })
        .then(response => { return response.data})
        dispatch({ type: types.NEW_TODOS, payload: res, id })
}