import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";

const Products = ({ product, handleBooked }) => {
    return (
        <div>
            <div className='card card-compact w-96 bg-base-100 shadow-2xl'>
                <figure>
                    <img src={product.poduct_Image} alt='Shoes' />
                </figure>
                <div className='card-body'>
                    <div>
                        <h2 className='text-2xl font-semibold text-center '>{product.name}</h2>
                        <div className='grid gap-2 my-2 text-[16px] font-semibold font-sans'>
                            <p>Seller : {product.seller}</p>
                            <p> {product.location}</p>

                            <div className='flex justify-between'>
                                <span className=''>Orginal Price: ${product.orginal_Price}</span>
                                <span className=''>Resale Price: ${product.resale_Price}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span>Published Date : {product.date}</span>
                                <span>Used : {product.use}</span>
                            </div>
                        </div>
                        <div className='card-actions '>
                            <label htmlFor='booking-modal' onClick={() => handleBooked(product)} className='btn btn-primary w-full'>
                                Book Now
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
