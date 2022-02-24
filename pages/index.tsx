import {NavbarLayout} from "../layout/navbarLayout";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";

export default function Home() {
    let titleHome = useSelector((state: RootState) => state.homePage.homeTitle)
    return (
        <NavbarLayout title={'Home Page'}>
            <main>
                <h1 className={'title'}>  { titleHome }</h1>
                <ol className={'list__requirements'}>
                    <li>Приложение содержит 2 страницы: главная и список todo</li>
                    <li>Переход между страницами реализован через navbar</li>
                    <li>На главной странице лого и краткое описание страницы</li>
                    <li>На странице для списка todo интерактивный список</li>
                    <li>Данные для списка запрашиваются с https://jsonplaceholder.typicode.com/todos</li>
                    <li>Реализована возможность добавления/изменения/удаления todo</li>
                    <li>Реализована пагинация без перезагрузки страницы</li>
                </ol>
                <ul className={'list__requirements'}><strong>Использовано:</strong>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React router</li>
                    <li>Next js</li>
                    <li>Typescript</li>
                    <li>Axios</li>
                </ul>
            </main>
        </NavbarLayout>
    )
}


