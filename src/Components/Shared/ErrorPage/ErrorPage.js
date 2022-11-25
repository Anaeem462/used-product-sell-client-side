import React from "react";

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-6xl text-warning'>404 Not Found</h1>
            <Link to='/' className='btn btn-error'>
                Go to Home page
            </Link>
        </div>
    );
};

export default ErrorPage;
