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
        <div>
            <h1 className='text-3xl bold'>Payment for {productName}</h1>
            <p className='text-xl'>
                Please pay <strong>${productPrice}</strong> for your product
            </p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut data={data}></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
