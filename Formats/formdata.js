//--------------------for image---------------------//
//  REACT_APP_imagebb_key=22289bffc0f2c8d3eb50970008e22d0a
// REACT_APP_imagebb_url = https://api.imgbb.com/1/upload?key=22289bffc0f2c8d3eb50970008e22d0a

const handleAddDoctor = (data) => {
    setSignUpError("");
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(imgbbUrl, { method: "POST", body: formData })
        .then((res) => res.json())
        .then((imagedata) => {
            if (imagedata.success) {
                const photoUrl = imagedata.data.url;

                const doctor = {
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    image: photoUrl,
                };
                // save doctor in database
                fetch(`http://localhost:5000/doctors?speciality=${data.speciality}&email=${data.email}`, {
                    method: "POST",
                    headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
                    body: JSON.stringify(doctor),
                })
                    .then((res) => res.json())
                    .then((result) => {
                        if (result.acknowledged) {
                            toast.success("successfully added in doctors list");
                            navigate("/dashboard/alldoctors");
                        } else {
                            toast.error(result.message);
                        }
                    })
                    .catch((err) => console.log(err));
            }
        });
};
