import React from "react";
import Carousel from "../Carousel/Carousel";
import HomeCard from "../HomeCard/HomeCard";
import { Player } from "@lottiefiles/react-lottie-player";
const Home = () => {
    return (
        <div>
            <div className=' bg-base-300 py-8'>
                <Player src='https://assets3.lottiefiles.com/packages/lf20_skfh9odt.json' className='player w-full h-96' loop autoplay></Player>
            </div>
            {/* <Carousel></Carousel> */}
            <HomeCard></HomeCard>
        </div>
    );
};

export default Home;
