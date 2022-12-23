import React, { useContext } from "react";
import { AuthContext } from "./../../../../Context/AuthProvider";

const BookingModal = ({ productData, handleSubmit }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className='scroll-smooth'>
            <input type='checkbox' id='booking-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box'>
                    <label htmlFor='booking-modal' className='btn btn-sm btn-circle absolute md:right-2 left-2'>
                        ✕
                    </label>
                    {productData && (
                        <form onSubmit={handleSubmit} className='card-body'>
                            <div className='form-control grid sm:grid-cols-2 items-center justify-center'>
                                <label className='label'>
                                    <span className='label-text uppercase text-xl'>Your Name :</span>
                                </label>
                                <input type='text' value={user?.displayName} disabled name='name' className='input input-bordered' />
                            </div>
                            <div className='form-control grid sm:grid-cols-2  items-center justify-center '>
                                <label className='label'>
                                    <span className='label-text text-xl uppercase '>your Email :</span>
                                </label>
                                <input type='email' value={user?.email} disabled name='email' className='input input-bordered' />
                            </div>
                            <div className='form-control grid sm:grid-cols-2   items-center justify-center'>
                                <label className='label'>
                                    <span className='label-text text-xl uppercase '>Product Name :</span>
                                </label>
                                <input type='text' value={productData?.name} name='product' disabled className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text font-bold '>Your Phone Number</span>
                                </label>
                                <input type='tel' required name='phone' placeholder='phone number' className='input input-bordered uppercase ' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text font-bold'>Meeting Location</span>
                                </label>
                                <input type='text' required name='location' placeholder='location' className='input input-bordered uppercase ' />
                            </div>
                            <div className='form-control grid sm:grid-cols-2  items-center justify-center  '>
                                <label className='label'>
                                    <span className='label-text uppercase text-xl'>Product Price :</span>
                                </label>
                                <input
                                    type='text'
                                    value={`$${productData?.resale_Price || productData?.resale_price} `}
                                    name='price'
                                    disabled
                                    className='input input-bordered'
                                />
                            </div>
                            <button htmlFor='booking-modal' className='btn form-control mt-2 btn-primary'>
                                submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
