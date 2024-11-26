import { createBrowserRouter } from "react-router-dom"
import Home from "../component/home"
import Modal from "../component/modal"
import Todo_list from "./todolist"

export const root = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/modal',
        element:<Modal/>
    },
    {
        path:'/todo_list',
        element:<Todo_list/>
    }
    
])
    
