const axios = require('axios');
const templates = axios.create({
        withCredentials: true,
        headers: {"API-KEY": "0220217162335"},
        baseURL: 'https://jsonplaceholder.typicode.com/'
    }
);
export const todosAPI = {
    getTodos(currentPage = 1, pageSize = 20) {
        return templates.post((`todos?page${currentPage}&count${pageSize}`))
    },
    deleteTodos(id) {
        return templates.delete(`todos/${id}`)
    },
    postTodos(id) {
        return templates.post(`todos/${id}`)
    },
    changesTodos(id, title) {
        return templates.post(`todos/${id}`)
    },
};

