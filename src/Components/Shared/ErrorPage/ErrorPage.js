import React from "react";

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='text-center my-28'>
            <h1 className='text-6xl text-warning mb-12'>404 Not Found</h1>
            <Link to='/' className='btn btn-error'>
                Go to Home page
            </Link>
        </div>
    );
};

export default ErrorPage;
