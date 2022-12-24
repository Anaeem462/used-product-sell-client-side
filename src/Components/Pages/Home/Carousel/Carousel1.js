import React from "react";
import img1 from "../../../../assets/carousel-images/carousel-images-2.jfif";
import img2 from "../../../../assets/carousel-images/carousel-images-3.jfif";
import img3 from "../../../../assets/carousel-images/carousel-images-4.jfif";
const Carousel1 = () => {
    return (
        <div className='mycarousel flex  '>
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
        </div>
    );
};

export default Carousel1;
