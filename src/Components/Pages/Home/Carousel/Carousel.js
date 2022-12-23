import React from "react";
import { useState } from "react";

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const carouselImagesData = [
        {
            id: 1,

            img: "https://img.freepik.com/free-vector/isometric-mobile-phone-background-template_52683-7075.jpg?w=996&t=st=1670565832~exp=1670566432~hmac=a5c269068ab89515b231191851a41ac74e823e0a609f67188903978f7460db5f",
        },
        {
            id: 2,

            img: "https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?w=996&t=st=1670565572~exp=1670566172~hmac=6ee423f88063113c132f831a44c9840fbe983bb1b536e8338acceaf067d911cc",
        },
        {
            id: 3,

            img: "https://img.freepik.com/free-vector/gradient-smartphone-isometric-technology-background_52683-6157.jpg?w=996&t=st=1670565915~exp=1670566515~hmac=a622be806d48280dbc42a92fea43f0e3338399c51d2144f40c53c2a93c603374",
        },
        {
            id: 4,

            img: "https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/602e1766b2f2e2001df1ab62.png",
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
        setCurrent(current === length ? 0 : current + 1);
    }, 10000);

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
                    <div key={i}>{i === current && <img src={image.img} alt='' className={`w-full h-auto  lg:h-[600px] `} />}</div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
