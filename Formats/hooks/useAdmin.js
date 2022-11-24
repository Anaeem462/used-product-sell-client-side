import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const useAdmin = (email) => {
    const { logOutUser } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/adminusers?email=${email}`, {
                headers: { authorization: localStorage.getItem("userToken") },
            })
                .then((res) => res.json())
                .then((result) => {
                    setAdminLoading(false);
                    if (result?.role === "Admin") {
                        setIsAdmin(true);
                    }
                })
                .catch((err) => {
                    toast.error(err.message);
                    console.eror(err.message);
                });
        }
    }, [email]);
    return [isAdmin, adminLoading];
};
export default useAdmin;
