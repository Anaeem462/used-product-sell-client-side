import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../Context/AuthProvider";

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const imgbbUrl = process.env.REACT_APP_imgbbUrl;

    //form hadler
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //make date
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const fulldate = day + "/" + month + "/" + year;

    //make orginal_price

    const price = Math.round(Math.random() * 20 + 10);

    const onSubmit = (data) => {
        // make image url
        const image = data.poduct_Image[0];
        const formdata = new FormData();
        formdata.append("image", image);

        // console.log(err.message);

        // image upload get link
        fetch(imgbbUrl, { method: "POST", body: formdata })
            .then((res) => res.json())
            .then((imagedata) => {
                if (imagedata.success) {
                    const photoUrl = imagedata.data.url;
                    data.poduct_Image = photoUrl;
                    data["date"] = fulldate;
                    data["orginal_Price"] = parseInt(data.resale_price) + price;

                    // ---------------set products in db---------
                    fetch(`${process.env.REACT_APP_SERVER_URL}/products`, {
                        method: "POST",
                        headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
                        body: JSON.stringify(data),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            if (result.insertedId && result.acknowledged) {
                                toast.success("successfully added product");
                                reset();
                            }
                        })
                        .catch((err) => {
                            toast.error(err.message);
                            console.error(err.message);
                        });
                }
            });
    };

    return (
        <div>
            <div className='flex justify-center my-12'>
                <div className='card w-1/2  shadow-2xl'>
                    <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
                        <h1 className='text-2xl text-primary font-bold text-center'>Add A Product</h1>
                        <div className=' grid grid-cols-2 gap-2'>
                            {/*---------------- input seller ---------------*/}

                            <div>
                                <label className='label'>
                                    <span className='label-text'>Your Name</span>
                                </label>
                                <input
                                    {...register("seller", { required: true })}
                                    type='text'
                                    name='seller'
                                    value={user?.displayName}
                                    readOnly
                                    className='input input-bordered'
                                />
                            </div>

                            {/*------------- input seller_email ------------*/}

                            <div>
                                <label className='label'>
                                    <span className='label-text'>your Email</span>
                                </label>
                                <input
                                    {...register("seller_email", { required: true })}
                                    type='email'
                                    name='seller_email'
                                    value={user?.email}
                                    readOnly
                                    className='input input-bordered'
                                />
                            </div>

                            {/*------------------ input name ---------------*/}

                            <div>
                                <label className='label'>
                                    <span className='label-text'>Product Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type='text'
                                    placeholder='product name'
                                    name='name'
                                    className='input input-bordered'
                                />
                            </div>

                            {/*-------------- input seller_phone -----------*/}

                            <div>
                                <label className='label'>
                                    <span className='label-text'>Your Phone Number</span>
                                </label>
                                <input
                                    {...register("seller_phone", { required: true })}
                                    type='tel'
                                    name='seller_phone'
                                    placeholder='phone number'
                                    className='input input-bordered'
                                />
                            </div>
                            {/*--------------- input location---------------*/}

                            <div>
                                <label className='label'>
                                    <span className='label-text'>Meeting Location</span>
                                </label>
                                <input
                                    {...register("location", { required: true })}
                                    type='text'
                                    name='location'
                                    placeholder='location'
                                    className='input input-bordered'
                                />
                            </div>

                            {/*------------input resale_price --------------*/}

                            <div>
                                <label className='label'>
                                    <span className='label-text'>Product Price</span>
                                </label>
                                <input
                                    {...register("resale_price", { required: true })}
                                    type='text'
                                    name='resale_price'
                                    className='input input-bordered'
                                />
                            </div>

                            {/*---------------- input use ------------------*/}

                            <div>
                                <label className='label'>
                                    <span className='label-text'>year of use</span>
                                </label>
                                <input {...register("use", { required: true })} type='text' name='use' className='input input-bordered' />
                            </div>

                            {/* -------------- selected area ---------------*/}

                            <div className='flex gap-3'>
                                {/*--------------- selecet condition ---------------*/}
                                <div>
                                    <label className='label'>
                                        <span className='label-text'>Condition</span>
                                    </label>
                                    <select name='condition' {...register("condition", { required: true })} className='select select-bordered '>
                                        <option value='Excellent' defaultValue='Excellent'>
                                            Excellent
                                        </option>
                                        <option value='Good'>Good</option>
                                        <option value='fair'>Fair</option>
                                    </select>
                                </div>
                                {/*--------------- input  category ---------------*/}
                                <div>
                                    <label className='label'>
                                        <span className='label-text'>Category</span>
                                    </label>
                                    <select name='category' {...register("category", { required: true })} className='select select-bordered '>
                                        <option value='Iphone' defaultValue='Iphone'>
                                            Iphone
                                        </option>
                                        <option value='poco'>poco</option>
                                        <option value='xiaomi'>xiaomi</option>
                                    </select>
                                </div>
                            </div>
                            {/*--------------- input details ---------------*/}

                            <div>
                                <label className='label'>
                                    <span className='label-text'>Description</span>
                                </label>
                                <textarea
                                    {...register("details", { required: true })}
                                    className='textarea border border-slate-300 w-full'
                                    name='details'
                                    placeholder='Description'></textarea>
                            </div>
                            {/*----------------- input image ---------------*/}
                            <div>
                                <label className='label'>
                                    <span className='label-text'>product image</span>
                                </label>
                                <input {...register("poduct_Image", { required: true })} required type='file' name='poduct_Image' />
                            </div>
                        </div>
                        <button className='btn form-control mt-6 btn-primary'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
