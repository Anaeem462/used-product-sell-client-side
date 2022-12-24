import React from "react";
import Carousel from "../Carousel/Carousel";
import HomeCard from "../HomeCard/HomeCard";
import { Player } from "@lottiefiles/react-lottie-player";
import Carousel1 from "../Carousel/Carousel1";
const Home = () => {
    return (
        <div className=' scroll-smooth'>
            <Carousel></Carousel>

            <HomeCard></HomeCard>
            <div className='grid lg:grid-cols-2 justify-center items-center bg-gradient-to-bl from-[#08203e] to-[#557c93] text-white   py-8   '>
                <div className='lg:pl-24 lg:pr-5 px-5'>
                    <h1 className='text-5xl font-extrabold'>We Provide best service</h1>

                    <p className='mt-7 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloremque ut itaque voluptate cumque repellat hic
                        officiis non ullam labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ut. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Voluptas dolorem incidunt porro ut odit itaque repellendus ea rem adipisci. Quae, et? Eveniet
                        consequuntur pariatur exercitationem numquam non consectetur aliquam neque corporis quam necessitatibus nesciunt quia magni
                        quasi deleniti incidunt, animi earum, voluptates reprehenderit voluptatibus! Ab, necessitatibus illum. Dolor, sit ad inventore
                        eos laudantium ex aliquid at saepe consectetur libero quam commodi, nisi nesciunt. Dolore dicta cupiditate voluptate, ea fuga
                        rerum soluta dolor eos. Reiciendis quo perferendis minus laudantium magnam incidunt odio odit modi debitis, corrupti eius
                        tempore culpa voluptatum unde cum architecto quasi! Ullam eveniet fugit harum deleniti error vitae omnis aliquid facere iste
                        accusamus tenetur sequi velit odit ab, neque veritatis ad, totam accusantium nulla voluptatibus suscipit dolore sint.
                    </p>
                </div>
                <div className='px-8'>
                    <Player
                        src='https://assets3.lottiefiles.com/packages/lf20_skfh9odt.json'
                        className='player w-full h-auto lg:mt-0 mt-5  '
                        loop
                        autoplay></Player>
                </div>
            </div>
            <Carousel1></Carousel1>
        </div>
    );
};

export default Home;
