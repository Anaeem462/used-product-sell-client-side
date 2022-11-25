import React, { useContext } from "react";
import { AuthContext } from "./../../../../Context/AuthProvider";

const BookingModal = ({ productData, handleSubmit }) => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <input type='checkbox' id='booking-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box'>
                    <label htmlFor='booking-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>
                        ✕
                    </label>
                    {productData && (
                        <form onSubmit={handleSubmit} className='card-body'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Your Name</span>
                                </label>
                                <input type='text' value={user?.displayName} disabled name='name' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>your Email</span>
                                </label>
                                <input type='email' value={user?.email} disabled name='email' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Product Name</span>
                                </label>
                                <input type='text' value={productData?.name} name='product' disabled className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Your Phone Number</span>
                                </label>
                                <input type='tel' required name='phone' placeholder='phone number' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Meeting Location</span>
                                </label>
                                <input type='text' required name='location' placeholder='location' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Product Price</span>
                                </label>
                                <input type='text' value={`$${productData?.resale_Price}`} name='price' disabled className='input input-bordered' />
                            </div>
                            <button htmlFor='booking-modal' className='btn form-control mt-6 btn-primary'>
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
