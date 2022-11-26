import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useHost = (email) => {
    const [isHost, setIsHost] = useState(false);
    const [hostLoading, setHostLoading] = useState(true);
    useEffect(() => {
        setHostLoading(true);
        if (email) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/hostuser?email=${email}`, {
                headers: { authorization: localStorage.getItem("userToken") },
            })
                .then((res) => res.json())
                .then((result) => {
                    setHostLoading(false);
                    if (result?.role === "host") {
                        return setIsHost(true);
                    }
                    if (result.message) {
                        toast.error(result.message);
                    }
                })
                .catch((err) => {
                    setHostLoading(false);
                    toast.error(err.message);
                    console.eror(err.message);
                });
        }
    }, [email]);
    return [isHost, hostLoading];
};
export default useHost;
