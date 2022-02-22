import {NavbarLayout} from "../../layout/navbarLayout";
import Link from "next/link";
import {getTodosAPI} from "../api_aa";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

export default function Index() {
    // getTodosAPI()
    const todos = useSelector((state: RootState) => state.todoPage.todos)

    // const array = todos.reduce((acc, userId) => {
    //         if(acc.mot[userId.userId]) return acc;
    //         acc.mot[userId.userId] = true;
    //         acc.kyeUsers.push(userId);
    //         return acc;},
    //     {
    //         mot: {},
    //         kyeUsers: []
    //     }, 0)
    // const arrayKey = array.kyeUsers;
    return (

        <NavbarLayout title={'Index'}>
            <h1> Filter todos from userId </h1>
            {todos.map(user => ( <li className={"list"} key={user.userId}>
                    <Link href={`/todos/${user.userId}`}><a>TODO CREATED USER: userId = {user.userId}</a></Link>
                </li>))}
        </NavbarLayout>

    )
}

// Index.getInitialProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const todos = await res.json();
//     return {
//         todos
//     }
// }