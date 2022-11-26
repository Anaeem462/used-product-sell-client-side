import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-full w-full'>
            <div>
                <Player src='https://assets4.lottiefiles.com/packages/lf20_6pgBO2srnh.json' autoplay loop></Player>
            </div>
            <div className='spinner-border animate-spin inline-block w-12 h-10 border-4 rounded-full border-red-600 border-l-none' role='status'>
                <span className='visually-hidden'></span>
            </div>
        </div>
    );
};

export default Spinner;
