import React, { useContext } from "react";

import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../Components/Shared/spinner/Spinner";
import useAdmin from "./../utilities/hooks/useAdmin";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AdminRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const navigate = useNavigate();
    if (loading && adminLoading) {
        return <Spinner></Spinner>;
    }
    if (user && isAdmin) {
        return children;
    } else {
        return navigate("/login");
    }
};

export default AdminRoute;
