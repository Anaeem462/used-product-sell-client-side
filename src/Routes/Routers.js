import { createBrowserRouter } from "react-router-dom";
import Category from "../Components/Pages/Category/Category";
import AddProduct from "../Components/Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Components/Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Components/Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Components/Pages/Dashboard/Dashboard/Dashboard";

import MyOrders from "../Components/Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Components/Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../Components/Pages/Dashboard/Payment/Payment";
import Home from "../Components/Pages/Home/HomeLayout/Home";
import Main from "./../Components/Layout/Main";
import LogIn from "./../Components/Pages/LogIn/LogIn";
import SignUp from "./../Components/Pages/SignUp/SignUp";
import ErrorPage from "./../Components/Shared/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import HostRoute from "./HostRoute";
import PrivateRoute from "./PrivateRoute";

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
        element: (
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
        ),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard/myorders",
                element: (
                    <PrivateRoute>
                        <MyOrders></MyOrders>
                    </PrivateRoute>
                ),
            },
            {
                path: "/dashboard/payments/:id",
                element: (
                    <PrivateRoute>
                        <Payment></Payment>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`${process.env.REACT_APP_SERVER_URL}/products/${params.id}`, {
                        headers: { authorization: localStorage.getItem("userToken") },
                    }),
            },
            {
                path: "/dashboard/addproduct",
                element: (
                    <HostRoute>
                        {" "}
                        <AddProduct></AddProduct>
                    </HostRoute>
                ),
            },
            {
                path: "/dashboard/myproducts",
                element: (
                    <HostRoute>
                        <MyProducts></MyProducts>
                    </HostRoute>
                ),
            },
            {
                path: "/dashboard/allbuyers",
                element: (
                    <AdminRoute>
                        {" "}
                        <AllBuyers></AllBuyers>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/allsellers",
                element: (
                    <AdminRoute>
                        <AllSellers></AllSellers>
                    </AdminRoute>
                ),
            },
        ],
    },
]);
