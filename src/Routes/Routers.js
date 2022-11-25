import { createBrowserRouter } from "react-router-dom";
import Category from "../Components/Pages/Category/Category";
import Home from "../Components/Pages/Home/HomeLayout/Home";
import Main from "./../Components/Layout/Main";
import LogIn from "./../Components/Pages/LogIn/LogIn";
import SignUp from "./../Components/Pages/SignUp/SignUp";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Main />,

        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <LogIn></LogIn>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/category",
                element: <Category></Category>,
            },
        ],
    },
]);
