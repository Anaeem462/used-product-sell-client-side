import React from "react";

import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const ErrorPage = () => {
    return (
        <div className='text-center my-28'>
            <div>
                <Player src='https://assets4.lottiefiles.com/packages/lf20_9Fhz02H45R.json' className='player' loop autoplay></Player>
            </div>
            <Link to='/' className='btn btn-error'>
                Go to Home page
            </Link>
        </div>
    );
};

export default ErrorPage;
