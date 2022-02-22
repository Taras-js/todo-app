import {NavbarLayout} from "../../layout/navbarLayout";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/reducers";
import {useEffect} from "react";
import {deleteTodos, fetchTodos, changeTodo, currentPage, addNewTodo} from "../../store/actions/todoAction";



export default function NewTodos() {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todoPage.todos);
    const totalPageCount = useSelector((state: RootState) => state.todoPage.totalPageCount);
    const pageSize = useSelector((state: RootState) => state.todoPage.pageSize);
    const page = useSelector((state: RootState) => state.todoPage.currentPage);
    useEffect(()=> {
        dispatch(fetchTodos())
    },[])
    let pages = [];
    for(let i=1; i<=totalPageCount; i++) {
        pages.push(i)
    }
    function changePage (p){
        dispatch(currentPage(p))
    }
    return (
        <NavbarLayout title={'Todos Page'}>
            <div>
                {pages.map(p=>{
                    return <button onClick={()=>{

                        changePage(p)
                    }
                    }>
                        {p}
                    </button>
                })}


            </div>
<div>


    <button  onClick={()=> {
        const newTodo = prompt();
        dispatch(addNewTodo(newTodo))
    }}> Send todo</button>


</div>

            <ol className={"list__item"}> Listen todos alle users
                {todos.filter(s=> {
                    if(s.id <= pageSize*page && s.id >= pageSize*page - 19 ) {return s}}).map(s => {
                    return <li className={"listen"}>
                        <div > {s.userId} </div>
                        <div key={s.id}> {s.id} </div>
                        <div> {s.title} </div>
                        <button onClick={() => {
                            const id = s.id
                                   dispatch(deleteTodos(id))
                           }}
                        > DELETE </button>
                        <button onClick={()=>{
                        let title = s.title
                            const id = s.id
                            const newMessage = prompt()
                            dispatch(changeTodo(newMessage, id))
                        }
                        }> CHANGE </button>
                    </li>

                })}
            </ol>

        </NavbarLayout>
    )
}

