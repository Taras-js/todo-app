import {NavbarLayout} from "../layout/navbarLayout";
import {useDispatch, useSelector} from "react-redux";
const axios = require('axios');

export default function Home() {
    const dispatch = useDispatch()
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(data => {return data.data})
        // .then(data => data)
        .then(function (data) {
            const array = data.map(t => t)
            dispatch({type: "GET_POST_TODOS", payload: array})
            return array
        })
        .catch(function (error) {
        })
    let titleHome = useSelector(state => state.home.homeTitle)

    return (
        <NavbarLayout title={'Home Page'}>
            <main>
                <h2> {titleHome} </h2>
                <ol>
                    <li>Приложение содержит 2 страницы: главная и список todo</li>
                    <li>Переход между страницами реализован через navbar</li>
                    <li>На главной странице лого и краткое описание страницы</li>
                    <li>На странице для списка todo интерактивный список</li>
                    <li>Данные для списка запрашиваются с https://jsonplaceholder.typicode.com/todos</li>
                    <li>Реализована возможность добавления/изменения/удаления todo</li>
                    <li>Реализована пагинация без перезагрузки страницы</li>
                </ol>
                <ul><strong>Использовано:</strong>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React router</li>
                    <li>Next js</li>
                    <li>Typescript</li>
                    <li>Axios</li>
                    <li>Sass</li>
                </ul>
            </main>
        </NavbarLayout>
    )
}


