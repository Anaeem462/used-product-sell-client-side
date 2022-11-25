import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const useHost = (email) => {
    const { logOutUser } = useContext(AuthContext);
    const [isHost, setIsHost] = useState(false);
    const [hostLoading, setHostLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/adminusers?email=${email}`, {
                headers: { authorization: localStorage.getItem("userToken") },
            })
                .then((res) => res.json())
                .then((result) => {
                    setHostLoading(false);
                    if (result?.role === "host") {
                        setIsHost(true);
                    }
                })
                .catch((err) => {
                    toast.error(err.message);
                    console.eror(err.message);
                });
        }
    }, [email]);
    return [isHost, hostLoading];
};
export default useHost;
