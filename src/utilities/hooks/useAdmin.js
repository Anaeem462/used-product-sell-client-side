import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const useAdmin = (email) => {
    const { logOutUser } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        setAdminLoading(true);
        if (email) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/adminuser?email=${email}`, {
                headers: { authorization: localStorage.getItem("userToken") },
            })
                .then((res) => res.json())
                .then((result) => {
                    setAdminLoading(false);

                    if (result?.role === "admin") {
                        setIsAdmin(true);
                    } else {
                        setIsAdmin(false);
                    }
                })
                .catch((err) => {
                    setIsAdmin(false);
                    setAdminLoading(false);
                    toast.error(err.message);
                    console.eror(err.message);
                });
        }
    }, [email]);
    return [isAdmin, adminLoading];
};
export default useAdmin;
