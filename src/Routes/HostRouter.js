import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Shared/spinner/Spinner";

import { AuthContext } from "../Context/AuthProvider";
import useHost from "./../utilities/hooks/UseHost";

const HostRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isHost, hostLoading] = useHost(user?.email);
    const navigate = useNavigate();
    if (loading && hostLoading) {
        return <Spinner></Spinner>;
    }
    if (user && isHost) {
        return children;
    } else {
        return navigate("/login");
    }
};

export default HostRouter;
