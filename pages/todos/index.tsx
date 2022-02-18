import {NavbarLayout} from "../../layout/navbarLayout";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

export default function Todos(props) {
    console.log(props)
    const todos = useSelector((state: RootState) => state.todo.todos)
    const totalTodos: number = todos.length;
    const pageSize: number = 20;
    let pagesCount: number = Math.ceil(totalTodos / pageSize);
    const pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }

    function inter (page: number) {
        const end: number = page*pageSize;
        const start: number = end - 19;
        const filter = todos.filter(size => size.id <= end && size.id >= start);
        const list = document.querySelector('ul');
        list.innerHTML = filter.map(t =>
          `<li class="list" key={t.title}> ${t.id}. ${t.title} <div><button class="btn">Delete</button> 
                <button class="btn">Change</button></div></li>`).join('')
    }
    return (
        <NavbarLayout title={'Todos Page'}>
        <h1 key={"string"}> List alle todos </h1>
            <div key={"string1"} className={"wrapper"}>{pages.map(page => {
                return <button className={"selectedPage"} onClick={() => { inter(page) }}>{page}</button>})}
            </div>
            <ul key={"string2"}>
                {todos.map(size => {if(size.id <= 19 && size.id >= 1)
                {return <li className="list" key={size.title}>{size.id}. {size.title}<div><button className={"btn"}>Delete</button>
                    <button className={"btn"}>Change</button></div></li>}})}
            </ul>
                <div className={"form"}>
                    <form className={"simple form"}>
                        <fieldset className={"fieldset"}>
                            <legend className="legend"> Add todos </legend>
                            <textarea> Add todo </textarea>
                            <a ><button className={"btn"} type={"submit"}> Save </button></a>
                        </fieldset>
                    </form>
                </div>
        </NavbarLayout>
    )
}




