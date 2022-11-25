import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import useAdmin from "./../hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading, logOutUser } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);

    if (loading || adminLoading) {
        return <Loading></Loading>;
    }
    if (user && isAdmin) {
        return children;
    } else {
        toast.error("you are not an admin");
        return <Navigate to='/login' state={{ from: "/" }} replace></Navigate>;
    }
};

export default AdminRoute;
