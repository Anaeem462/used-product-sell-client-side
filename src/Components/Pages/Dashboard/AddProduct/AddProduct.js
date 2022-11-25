import React from "react";
import { toast } from "react-hot-toast";

const AddProduct = () => {
    const date = new Date();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const productData = {
            name: form.product.value,
            location: form.location.value,
            resale_price: form.price.value,
            use: form.yearofuse.value,
            seller: form.name.value,
            verified: false,
            condition: form.condition.value,
            category: form.category.value,
            details: form.description.value,
            seller_email: form.email.value,
            seller_phone: form.phone.value,
        };
        fetch(`${process.env.REACT_APP_SERVER_URL}/products`, {
            method: "POST",
            headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
            body: JSON.stringify(productData),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.error(result.message);
                console.log(result);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div className='flex justify-center my-12'>
                <div className='card w-2/3  shadow-2xl'>
                    <form onSubmit={handleSubmit} className='card-body'>
                        <h1 className='text-2xl text-primary font-bold text-center'>Add A Product</h1>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Your Name</span>
                                </label>
                                <input required type='text' name='name' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>your Email</span>
                                </label>
                                <input required type='email' name='email' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Product Name</span>
                                </label>
                                <input required type='text' name='product' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Your Phone Number</span>
                                </label>
                                <input required type='tel' name='phone' placeholder='phone number' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Meeting Location</span>
                                </label>
                                <input required type='text' name='location' placeholder='location' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Product Price</span>
                                </label>
                                <input required type='text' name='price' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>year of use</span>
                                </label>
                                <input required type='text' name='yearofuse' className='input input-bordered' />
                            </div>

                            <div className='flex items-center justify-evenly my-2'>
                                <div className='flex items-center'>
                                    <input
                                        required
                                        type='radio'
                                        className='radio mr-2 radio-info'
                                        id='Excellent'
                                        name='condition'
                                        value='Excellent'
                                        defaultChecked
                                    />
                                    <label htmlFor='Excellent'>Excellent</label>
                                </div>

                                <div className='flex items-center'>
                                    <input required type='radio' className='radio mr-2 radio-info' id='Good' name='condition' value='Good' />
                                    <label htmlFor='Good'>Good</label>
                                </div>
                                <div className='flex items-center'>
                                    <input required type='radio' className='radio mr-2 radio-info' id='fair' name='condition' value='fair' />
                                    <label htmlFor='fair'>Fair</label>
                                </div>
                            </div>
                            <div>
                                <label className='label'>
                                    <span className='label-text'>Description</span>
                                </label>
                                <textarea className='textarea border border-slate-300 w-full' name='description' placeholder='Description'></textarea>
                            </div>
                            <div className='flex items-center justify-evenly my-2'>
                                <div className='flex items-center'>
                                    <input
                                        required
                                        type='radio'
                                        className='radio mr-2 radio-info'
                                        id='Iphone'
                                        name='category'
                                        value='Iphone'
                                        defaultChecked
                                    />
                                    <label htmlFor='Iphone'>Iphone</label>
                                </div>

                                <div className='flex items-center'>
                                    <input required type='radio' className='radio mr-2 radio-info' id='poco' name='category' value='poco' />
                                    <label htmlFor='poco'>poco</label>
                                </div>
                                <div className='flex items-center'>
                                    <input required type='radio' className='radio mr-2 radio-info' id='xiaomi' name='category' value='xiaomi' />
                                    <label htmlFor='xiaomi'>xiaomi</label>
                                </div>
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
