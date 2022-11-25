import { createBrowserRouter } from "react-router-dom";
import Category from "../Components/Pages/Category/Category";
import Dashboard from "../Components/Pages/Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../Components/Pages/Dashboard/DashboardLayout/DashboardLayout";
import Home from "../Components/Pages/Home/HomeLayout/Home";
import Main from "./../Components/Layout/Main";
import LogIn from "./../Components/Pages/LogIn/LogIn";
import SignUp from "./../Components/Pages/SignUp/SignUp";
import ErrorPage from "./../Components/Shared/ErrorPage/ErrorPage";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
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
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
        ],
    },
]);
