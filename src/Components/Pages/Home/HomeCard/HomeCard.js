import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Spinner from "../../../Shared/spinner/Spinner";

const HomeCard = () => {
    const [category, setCategory] = useState();
    const [categoryId, setCategoryId] = useState(null);
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/products?id=${categoryId}`);
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className=' flex justify-center my-12'>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-20  '>
                {data.slice(0, 3)?.map((product) => (
                    <div key={product._id} className='card card-compact w-96 bg-base-100 shadow-2xl'>
                        <figure>
                            <img src={product.poduct_Image} alt='Shoes' />
                        </figure>
                        <div className='card-body'>
                            <div>
                                <h2 className='text-2xl font-semibold text-center '>{product.name}</h2>
                                <h2 className=' font-semibold text-center '>Location: {product.location}</h2>
                                <div className=''>
                                    <span className='text-xl font-bold'>Price:</span>
                                    <span className='text-blue-400 text-xl'>
                                        <del className='mx-2'>${product.orginal_Price}</del>${product.resale_Price}
                                    </span>
                                </div>
                            </div>
                            <div className='card-actions justify-end'>
                                <button className='btn btn-primary'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCard;
