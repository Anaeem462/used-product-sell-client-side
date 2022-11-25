// npm install --save @stripe/react-stripe-js @stripe/stripe-js

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(process.env.REACT_APP_stripe_paymentkey);

const Payment = () => {
    const data = useLoaderData();
    const { appointmentDate, email, patientName, price, slot, treatmentName } = data;
    return (
        <div>
            <h1 className='text-3xl bold'>Payment for {treatmentName}</h1>
            <p className='text-xl'>
                Please pay <strong>${price}</strong> for your appointment in {appointmentDate} at {slot}
            </p>
            <div>
                <Elements stripe={stripePromise}>
                    <Checkout data={data}></Checkout>
                </Elements>
            </div>
        </div>
    );
};
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Checkout = ({ data }) => {
    const [clientSecretKey, setClientSecretKey] = useState();
    const [processing, setProcessing] = useState(false);
    const [cardError, setCardError] = useState();
    const [success, setSuccess] = useState();
    const [transactionId, setTransactionId] = useState();

    const stripe = useStripe();
    const elements = useElements();

    const { price, patientName, email, treatmentName, slot, appointmentDate, _id } = data;

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((result) => {
                setClientSecretKey(result.clientSecret);
            });
    }, [price]);

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
                    name: patientName,
                    email: email,
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
                name: patientName,
                treatmentName,
                treatment_Date: appointmentDate,
                treatment_time: slot,
                email,
                transaction_id: paymentIntent.id,
                booking_id: _id,
            };
            fetch("http://localhost:5000/payments", {
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

/*
in server side
*/

// npm install stripe --save

// STRIPE_SECRET_KEY = sk_test_51M5uWPK0xncwrEopUNbKB8AZC0zlJEoml8NiHJlkMpvWIyzc4n6pK4mEwArxhsaDmi0g28A5VRsiR4rasOcQYqwb00DNyh5SPp;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const paymentsCollection = secondSellDb.collection("payments");
//user payment
/// for payment get product data
app.get("/products/:id", verifyJwt, async (req, res) => {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const product = await ordersCollection.findOne(query);
    res.send(product);
});

app.post("/create-payment-intent", async (req, res) => {
    const { productPrice } = req.body;

    console.log(productPrice);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: productPrice * 100,
        currency: "usd",
        payment_method_types: ["card"],
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});
app.post("/payments", verifyJwt, async (req, res) => {
    const data = req.body;
    const result = await paymentsCollection.insertOne(data);
    console.log(result);
    res.send(result);
});
