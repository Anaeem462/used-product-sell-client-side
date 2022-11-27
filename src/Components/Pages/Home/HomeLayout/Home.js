import React from "react";
import Carousel from "../Carousel/Carousel";
import HomeCard from "../HomeCard/HomeCard";
import { Player } from "@lottiefiles/react-lottie-player";
const Home = () => {
    return (
        <div className='mt-7'>
            <Carousel></Carousel>

            <HomeCard></HomeCard>
            <div className='  py-8 rounded-t-2xl'>
                <Player src='https://assets3.lottiefiles.com/packages/lf20_skfh9odt.json' className='player w-full h-[600px]' loop autoplay></Player>
            </div>
        </div>
    );
};

export default Home;
