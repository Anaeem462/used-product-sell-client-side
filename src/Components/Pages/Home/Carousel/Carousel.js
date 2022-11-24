import React from "react";

const Carousel = () => {
    const carouselImagesData = [
        { id: "slide1", prev: "#slide4", after: "#slide2", img: "https://placeimg.com/800/200/arch" },
        { id: "slide2", prev: "#slide1", after: "#slide3", img: "https://placeimg.com/800/200/arch" },
        { id: "slide3", prev: "#slide2", after: "#slide4", img: "https://placeimg.com/800/200/arch" },
        { id: "slide4", prev: "#slide3", after: "#slide1", img: "https://placeimg.com/800/200/arch" },
    ];
    return (
        <div>
            <div className='carousel w-full'>
                {carouselImagesData.map((carousel, i) => (
                    <div key={i} id={carousel.id} className='carousel-item relative w-full my-4 '>
                        <img src={carousel.img} className='w-full rounded-md ' />
                        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                            <a href={carousel.prev} className='btn btn-circle'>
                                ❮
                            </a>
                            <a href={carousel.after} className='btn btn-circle'>
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
