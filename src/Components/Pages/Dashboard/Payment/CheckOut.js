import React, { useContext, useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { AuthContext } from "../../../../Context/AuthProvider";

const CheckOut = ({ data }) => {
    const { user } = useContext(AuthContext);
    const [clientSecretKey, setClientSecretKey] = useState();
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState();
    const [success, setSuccess] = useState();
    const [transactionId, setTransactionId] = useState();
    const { buyerEmail, buyerName, productName, productPrice, _id, productId } = data;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/create-payment-intent`, {
            method: "POST",
            headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
            body: JSON.stringify({ productPrice }),
        })
            .then((res) => res.json())
            .then((result) => {
                setClientSecretKey(result.clientSecret);
            });
    }, [productPrice]);

    const handleSubmit = async (e) => {
        setProcessing(true);
        e.preventDefault();
        setSuccess("");
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError("");
        }

        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecretKey, {
            payment_method: {
                card: card,
                billing_details: {
                    name: buyerName,
                    email: buyerEmail,
                },
            },
        });

        if (paymentError) {
            setCardError(paymentError.message);
            setProcessing(false);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            setSuccess("congratulation! payment successfully");
            setTransactionId(paymentIntent.id);
            const payments = {
                name: buyerName,
                productName,
                email: buyerEmail,
                transaction_id: paymentIntent.id,
                ordersId: _id,
                productId,
            };
            fetch(`${process.env.REACT_APP_SERVER_URL}/payments`, {
                method: "POST",
                headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
                body: JSON.stringify(payments),
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => console.error(err.message));
        }
        setProcessing(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='m-4  pt-12 px-4 pb-3 rounded-md shadow-2xl bg-base-400 w-1/3'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                display: "block",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <div className='flex items-center justify-center mt-9 '>
                    <button type='submit' className='btn btn-success btn-xl px-12' disabled={!stripe || !clientSecretKey || success || processing}>
                        {success ? "payed" : "pay"}
                    </button>
                </div>
            </form>
            <p className='text-red-600 text-xl'>{cardError}</p>
            {success && (
                <>
                    <p className='text-green-600 text-xl text-bold'>{success}</p>
                    <p className='text-xl text-bold'>Transaction ID: {transactionId}</p>
                </>
            )}
        </>
    );
};

export default CheckOut;
