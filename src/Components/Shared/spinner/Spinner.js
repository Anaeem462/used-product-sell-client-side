import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-full w-full'>
            <div className='spinner-border animate-spin inline-block w-20 h-20 border-4 rounded-full border-red-600 border-l-none' role='status'>
                <div>
                    <Player src='https://assets4.lottiefiles.com/packages/lf20_6pgBO2srnh.json' className='w-24 h-24' autoplay loop></Player>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
