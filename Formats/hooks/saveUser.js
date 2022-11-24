import toast from "react-hot-toast";

const saveUser = (email, name, codes, system, from, navigate) => {
    let user = { email, name };
    if (system === "google.com") {
        user["uid"] = codes;
    } else {
        user["password"] = codes;
    }

    fetch("http://localhost:5000/setuser", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(user) })
        .then((res) => res.json())
        .then((result) => {
            if (result.result.acknowledged && result.userToken) {
                toast.success("successfully log in", { position: "top-center", duration: "2000" });
            } else if (!result.result.acknowledged) {
                toast.success(result.result.message);
                console.log(result);
            }
            localStorage.setItem("userToken", result.userToken);
            navigate(from, { replace: true });
        })
        .catch((err) => {
            toast.error(err.message);
            console.error(err.message);
        });
};

export default saveUser;
