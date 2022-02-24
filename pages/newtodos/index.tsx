import { NavbarLayout } from "../../layout/navbarLayout";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import { useEffect } from "react";
import { deleteTodos, fetchTodos, changeTodo, currentPage, addNewTodo } from "../../store/actions/todoAction";

export default function NewTodos() {

    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todoPage.todos);
    const totalPageCount = useSelector((state: RootState) => state.todoPage.totalPageCount);
    const pageSize = useSelector((state: RootState) => state.todoPage.pageSize);
    const page = useSelector((state: RootState) => state.todoPage.currentPage);
    useEffect(()=> { dispatch(fetchTodos()) }, [])
    let pages = [];
    for(let i=1; i<=totalPageCount; i++) { pages.push(i) }
    function changePage (p){ dispatch(currentPage(p)) }
    const pagination = (
        <div className={'wrap'}>
            {pages.map(p=>{
                return <button key={p.index} className={'selectedPage'} onClick={()=>{ changePage(p) } }> {p} </button> })}
        </div>

    );
    const sendTodo = (<button   className={'btn'} onClick={()=> {
            const newTodo = prompt();
            const id = todos.length + 1
            dispatch(addNewTodo(newTodo, id))
        }}> Send todo</button>)
    const todoList =todos.filter(s=> {
                if(s.id <= pageSize*page && s.id >= pageSize*page - (pageSize - 1) ) {return s}}).map(s => {
                return <li className={"listen"} key={s.id}>
                    {s.id}. {s.title}
                        <span>
                            <button  key={s.index} className={'btn'} onClick={() => {
                            const id = s.id
                            dispatch(deleteTodos(id))}}
                        > DELETE </button>
                        <button  key={s.completed} className={'btn'} onClick={()=>{
                            const id = s.id
                            const newMessage = prompt()
                            dispatch(changeTodo(newMessage, id))}}> CHANGE </button>
                        </span>
                </li>
            })

    return (
        <NavbarLayout title={'Todos Page'}>
           <div>
               { pagination }

               <div className={'sendTodo'}>
                   { sendTodo }
               </div>
                <ul className={"list__item"}> Listen todos alle users
                { todoList }
                </ul>
           </div>
        </NavbarLayout>
    )
}

