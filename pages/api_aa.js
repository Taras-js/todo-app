import axios from "axios"
import {useDispatch} from "react-redux";
import {DELETE_TODO_ID, GET_TODOS, GET_TODOS_NEW} from "../store/types";


export const getTodosAPI = function (){
    const dispatch = useDispatch()
    const setTodos = axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => { return response.data})
        .then(function (data) {
            return dispatch  ({type: GET_TODOS, payload: data})
        })
        .catch(function (error) { return console.log(error)
        })
}

