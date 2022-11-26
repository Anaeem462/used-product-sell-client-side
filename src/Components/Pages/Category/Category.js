import React, { useState, useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/spinner/Spinner";
import BookingModal from "./BookingModal/BookingModal";
import Products from "./Products/Products";
import { AuthContext } from "./../../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { Player } from "@lottiefiles/react-lottie-player";

const Category = () => {
    const { user } = useContext(AuthContext);

    // selected category
    const { state } = useLocation();
    const [productData, setProductData] = useState(null);

    //get data  by category from database
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["products", state],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/products?category=${state}`);
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
            buyerPhone,
            buyerLocation,
            productPrice,
            productId,
            productName,
            productImage: productData.poduct_Image,
        };
        fetch(`${process.env.REACT_APP_SERVER_URL}/orders?id=${productId}`, {
            method: "PUT",
            headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
            body: JSON.stringify(bookingInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                setProductData(null);
                if (result.acknowledged || result.matchedCount) {
                    // console.log(result);
                    toast.success(`${productName} is successfully booking`);
                    refetch();
                } else {
                    toast.error(result.message);
                }
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div>
            <div className=' flex justify-center my-12'>
                <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-20 items-center  mx-0 '>
                    {data?.map((product) => (
                        <Products key={product._id} product={product} handleBooked={handleBooked}></Products>
                    ))}
                </div>
                {!state && (
                    <div className='text-center'>
                        <p className='text-4xl text-red-600'>'Please select a category'</p>
                        <Player src='https://assets9.lottiefiles.com/packages/lf20_njobaah2.json' loop autoplay className='w-1/2'></Player>
                    </div>
                )}
            </div>

            {user && productData && <BookingModal productData={productData} handleSubmit={handleSubmit}></BookingModal>}
        </div>
    );
};

export default Category;
