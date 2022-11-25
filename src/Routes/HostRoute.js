import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { toast } from "react-hot-toast";

import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../Components/Shared/spinner/Spinner";

import useHost from "./../utilities/hooks/UseHost";

const HostRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [isHost, hostLoading] = useHost(user?.email);
    if (loading && hostLoading) {
        return <Spinner></Spinner>;
    }
    if (user && isHost) {
        return children;
    } else {
        toast.error("you are not an admin");
        return <Navigate to='/login' state={{ from: "/" }} replace></Navigate>;
    }
};

export default HostRoute;
