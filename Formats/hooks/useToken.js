import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-hot-toast";

const useToken = (email) => {
    const { logOutUser } = useContext(AuthContext);
    const [token, setToken] = useState("");

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then((res) => res.json())
                .then((result) => {
                    if (result.accessToken) {
                        localStorage.setItem("userToken", result.accessToken);
                        setToken(result.accessToken);
                    }
                })
                .catch((err) => toast.error(err.message, { position: "top-center", duration: 2000 }));
        }
    }, [email]);
    return [token];
};
export default useToken;
