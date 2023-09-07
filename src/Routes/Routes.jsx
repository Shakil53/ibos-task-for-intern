import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Task from "../Pages/Task/Task";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'task',
                element: <Task></Task>,
                loader: () => fetch('https://ibos-task-for-intern-server-shakil53.vercel.app/')
            }
        ]
    },
]);