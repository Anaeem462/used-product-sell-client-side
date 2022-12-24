import React from "react";
import { useState } from "react";
import "./Carousel.css";
import img1 from "../../../../assets/carousel-images/carousel-images-2.jfif";
import img2 from "../../../../assets/carousel-images/carousel-images-3.jfif";
import img3 from "../../../../assets/carousel-images/carousel-images-4.jfif";

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const carouselImagesData = [
        {
            id: 1,

            img: img1,
        },
        {
            id: 2,

            img: img2,
        },
        {
            id: 3,

            img: img3,
        },
    ];

    const length = carouselImagesData.length - 1;

    const nextImage = () => {
        setCurrent(current === length ? 0 : current + 1);
    };
    const prevImage = () => {
        setCurrent(current === 0 ? length : current - 1);
    };

    setTimeout(() => {
        nextImage();
    }, 5000);

    return (
        <div className='relative '>
            <div className='z-10 absolute  w-full top-[50%]'>
                <div className='flex justify-between  '>
                    <a onClick={prevImage} className='btn btn-circle btn-warning ml-5'>
                        ❮
                    </a>
                    <a onClick={nextImage} className='btn btn-circle btn-warning  mr-5'>
                        ❯
                    </a>
                </div>
            </div>
            <div className='relative z-0'>
                {carouselImagesData?.map((image, i) => (
                    <div key={i}>{i === current && <img src={image.img} alt='' className={`w-full `} />}</div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
