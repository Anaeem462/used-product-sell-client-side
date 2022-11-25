import React, { useState, useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/spinner/Spinner";
import BookingModal from "./BookingModal/BookingModal";
import Products from "./Products/Products";
import { AuthContext } from "./../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const Category = () => {
    const { user } = useContext(AuthContext);

    // selected category
    const { state } = useLocation();
    const [productData, setProductData] = useState(null);

    //get data from database
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["products", state],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/products?id=${state}`);
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Spinner></Spinner>;
    }
    const handleBooked = (product) => {
        if (!user) {
            return toast.error("please sign up first");
        }
        setProductData(product);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const productName = form.product.value;
        const buyerPhone = form.phone.value;
        const buyerLocation = form.location.value;
        const productPrice = form.price.value;
        const productId = productData._id;
        const bookingInfo = {
            buyerName,
            buyerEmail,
            productId,
            productName,
            buyerEmail,
            buyerPhone,
            buyerLocation,
            productPrice,
        };
        setProductData(null);
        console.log(bookingInfo);
    };
    return (
        <div>
            <div className=' flex justify-center my-12'>
                <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-20 items-center  mx-0 '>
                    {data?.map((product) => (
                        <Products key={product._id} product={product} handleBooked={handleBooked}></Products>
                    ))}
                </div>
            </div>
            {user && productData && <BookingModal productData={productData} handleSubmit={handleSubmit}></BookingModal>}
        </div>
    );
};

export default Category;
