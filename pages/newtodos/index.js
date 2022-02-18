import {NavbarLayout} from "../../layout/navbarLayout";
import {useDispatch, useSelector} from "react-redux";

export default function NewTodos() {
    const dispatch = useDispatch();
   const todos = useSelector(state => state.todo.todos)
    dispatch({type: 'GET_POST_TODOS', payload: todos})
    const totalTodos = todos.length;
    const pageSize = 20;
    let pagesCount = Math.ceil(totalTodos / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)}
    function inter (page) {
        const end = page*pageSize;
        const start = end - 19;
        const filter = todos.filter(size => size.id <= end && size.id >= start);
        const list = document.querySelector('ul');
        list.innerHTML = filter.map(t =>
            `<li className="list" key={t.title}> ${t.title} <button>Delete</button>
            </li>`).join('')
    }

    return (
        <NavbarLayout title={'Todos Page'}>
            <ol>
                {todos.map(s => {
                return <li>{s}</li>

                })}
            </ol>

            <h1 key={"string"}> List alle todos </h1>
            <div key={"string1"} className={"wrapper"}>{pages.map(page => {
                return <button className={"selectedPage"} onClick={() => { inter (page) }}>{page}</button>})}
            </div>
            <ul key={"string2"}>
                {todos.map(size => {if(size.id <= 15 && size.id >= 1)
                {return <li className="list" key={size.title}>{size.title}<button>Delete</button></li>}})}
            </ul>
        </NavbarLayout>
    )
}

