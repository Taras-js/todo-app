// import {NavbarLayout} from "../../layout/navbarLayout";
// import Link from "next/link";
//
// export default function Index({todos}) {
//     const array = todos.reduce((acc, userId) => {
//             if(acc.map[userId.userId]) return acc;
//             acc.map[userId.userId] = true;
//             acc.kyeUsers.push(userId);
//             return acc;},
//         {
//             map: {},
//             kyeUsers: []
//         }, 0)
//     const arrayKey = array.kyeUsers;
//     return (
//
//         <NavbarLayout title={'Index'}>
//             <h1> Filter todos from userId </h1>
//             {arrayKey.map(user => ( <li className={"list"} key={user.userId}>
//                     <Link href={`/todos/${user.userId}`}><a>TODO CREATED USER: userId = {user.userId}</a></Link>
//                 </li>))}
//         </NavbarLayout>
//
//     )
// }
//
// Index.getInitialProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const todos = await res.json();
//     return {
//         todos
//     }
// }