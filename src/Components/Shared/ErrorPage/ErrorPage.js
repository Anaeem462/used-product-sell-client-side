import React from "react";

import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center my-28 '>
            <div className='  grid justify-center items-center'>
                <Player src='https://assets4.lottiefiles.com/packages/lf20_9Fhz02H45R.json' className='player w-1/3 ' loop autoplay></Player>
                <h1 className='text-7xl text-center my-4 text-warning'>Not Found</h1>
                <div className='flex justify-center'>
                    <Link to='/' className='btn btn-error'>
                        Go to Home page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
