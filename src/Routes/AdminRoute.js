import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { toast } from "react-hot-toast";
import useAdmin from "./../hooks/useAdmin";
import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../Components/Shared/spinner/Spinner";

const AdminRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);

    if (loading) {
        return <Spinner></Spinner>;
    }
    if (user) {
        return children;
    } else {
        toast.error("you are not an admin");
        return <Navigate to='/login' state={{ from: "/" }} replace></Navigate>;
    }
};

export default AdminRoute;
