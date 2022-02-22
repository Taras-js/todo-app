import * as types from "../types";
import axios from "axios";


export const fetchTodos = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => { return response.data})
    dispatch({
        type: types.GET_TODOS,
        payload: response
    })
}
export const deleteTodos = (id) => async dispatch => {
    const responseDelete = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => { return response.data})
    dispatch(
        {
            type: types.DELETE_TODO_ID,
            payload: id
        }
    )

}
export const changeTodo = (newMessage, id) => async dispatch => {
    const responseChange = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`,{title: newMessage})
        .then(response => { return response.data})
    console.log(responseChange)
    dispatch(
        {
            type: types.CHANGE_MESSAGE,
            payload: responseChange
        }
    )
}
export const currentPage = (p) => dispatch => {
    dispatch(
        {
            type: types.CURRENT_PAGE,
            payload: p
        }
    )
}

export const addNewTodo = (newTodo) => async dispatch => {
    const newMessage = {
        userId: 1,
        id: 202,
        title: newTodo,
        completed: false
    }

    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        userId: 1,
        id: 202,
        title: newTodo,
    completed: false
    }
    )
        .then(response => {

            return response.data})

    dispatch(
        {
            type: types.NEW_TODOS,
            payload: newMessage
        }
    )
}