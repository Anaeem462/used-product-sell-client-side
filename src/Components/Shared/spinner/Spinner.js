import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Spinner = ({ spinnerProps = "w-12 h-12  ", spinnerParent = "flex justify-center  items-center   w-full" }) => {
    return (
        <div className={`${spinnerParent} h-screen`}>
            <div className={`spinner-border animate-spin  w-12 h-12 border-2 rounded-full ${spinnerProps} border-cyan-500 border-l-0 `} role='status'>
                {/* <Player src='https://assets4.lottiefiles.com/packages/lf20_6pgBO2srnh.json' className='w-24 h-24' autoplay loop></Player> */}
            </div>
        </div>
    );
};

export default Spinner;
