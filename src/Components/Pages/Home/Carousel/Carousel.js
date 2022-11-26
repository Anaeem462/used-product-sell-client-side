import React from "react";

const Carousel = () => {
    const carouselImagesData = [
        {
            id: "slide1",
            prev: "#slide4",
            after: "#slide2",
            img: "https://res.cloudinary.com/jerrick/image/upload/v1612861923/602251e3c53536001cefd834.png",
        },
        {
            id: "slide2",
            prev: "#slide1",
            after: "#slide3",
            img: "https://s3b.cashify.in/gpro/uploads/2022/10/21173759/Want-To-Sell-Old-Xiaomi-Redmi-9A-Sport_-Get-The-Best-Buyback-Value.jpg",
        },
        {
            id: "slide3",
            prev: "#slide2",
            after: "#slide4",
            img: "https://scontent.fcgp13-1.fna.fbcdn.net/v/t39.30808-6/272953139_260566636215948_409819089903184587_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=0dfLt27HVDEAX9pL8ec&_nc_ht=scontent.fcgp13-1.fna&oh=00_AfCyiDntEHuB81VufCS4mCWbip2h5Vjif4LAlPCsw0iiGQ&oe=6387B054",
        },
        {
            id: "slide4",
            prev: "#slide3",
            after: "#slide1",
            img: "https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/602e1766b2f2e2001df1ab62.png",
        },
    ];
    return (
        <div>
            <div className='carousel w-full'>
                {carouselImagesData.map((carousel, i) => (
                    <div key={i} id={carousel.id} className='carousel-item relative w-full mt-4 '>
                        <img src={carousel.img} className='w-full rounded-md h-[450px] ' />
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
