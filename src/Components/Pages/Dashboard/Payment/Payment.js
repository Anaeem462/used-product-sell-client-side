import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHED_KEY);
const Payment = () => {
    const data = useLoaderData();
    const { buyerEmail, productName, productPrice } = data;
    return (
        <div className='mt-4 w-full h-screen'>
            <h1 className='text-3xl bold text-center '>
                Payment for <span className='text-success font-bold'>{productName}</span>
            </h1>
            <p className='text-xl mt-4 ml-5'>
                Please pay <strong className='text-success'>${productPrice}</strong> for your product
            </p>
            <div className='ml-5'>
                <Elements stripe={stripePromise}>
                    <CheckOut data={data}></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
