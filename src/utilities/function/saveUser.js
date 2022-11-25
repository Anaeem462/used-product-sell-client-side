import toast from "react-hot-toast";

const saveUser = (email, name, role, codes, system, from, navigate) => {
    let user = { email, name, role };
    if (system === "google.com") {
        user["uid"] = codes;
    } else {
        user["password"] = codes;
    }

    fetch(`${process.env.REACT_APP_SERVER_URL}/setUser?email=${email}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((result) => {
            // console.log(result);
            if (result.result.acknowledged) {
                toast.success("successfully log in", { position: "top-center", duration: "2000" });
            } else if (!result.result.acknowledged) {
                toast.error(result.result.message);
                console.log(result);
            }
            localStorage.setItem("userToken", result.token);
            navigate(from, { replace: true });
        })
        .catch((err) => {
            toast.error(err.message);
            console.error(err.message);
        });
};

export default saveUser;
