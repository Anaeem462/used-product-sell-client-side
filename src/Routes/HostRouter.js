import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Context/AuthProvider";
import useHost from "./../utilities/hooks/UseHost";

const HostRouter = ({ children }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [isHost, hostLoading] = useHost(user?.email);
    if (isHost) {
        return children;
    } else {
        return navigate("/login");
    }
};

export default HostRouter;
