import React from "react";

const Spinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-x-red-600 border-y-green-600' role='status'>
                <span className='visually-hidden'></span>
            </div>
        </div>
    );
};

export default Spinner;
