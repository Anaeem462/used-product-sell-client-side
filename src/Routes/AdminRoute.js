import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { toast } from "react-hot-toast";

import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../Components/Shared/spinner/Spinner";
import useAdmin from "./../utilities/hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    if (loading && adminLoading) {
        return <Spinner></Spinner>;
    }
    if (user && isAdmin) {
        return children;
    }
    toast.error("you are not an admin");
    return <Navigate to='/login' state={{ from: "/" }} replace></Navigate>;
};

export default AdminRoute;
