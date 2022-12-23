import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../../Shared/spinner/Spinner";

const HomeCard = () => {
    const navigate = useNavigate();
    // const { data, isLoading, refetch } = useQuery({
    //     queryKey: ["products"],
    //     queryFn: async () => {
    //         const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/products`);
    //         const data = await res.json();
    //         return data;
    //     },
    // });
    // if (isLoading) {
    //     return <Spinner></Spinner>;
    // }

    const categories = [
        { id: 1, name: "Iphone" },
        { id: 2, name: "xiaomi" },
        { id: 3, name: "poco" },
    ];

    const handlebtn = (id) => {
        navigate("/category", { state: id });
    };

    return (
        <>
            <div className='text-center bg-gradient-to-tr from-[#40c9ff] to-[#e81cff] grid justify-center lg:py-0 py-36   lg:grid-cols-2 gap-4'>
                <div className='lg:border-r-2 lg:py-36 border-white hidden lg:block  text-white '>
                    <h1 className='text-7xl  font-bold '>What Do You Want ?</h1>
                    <h1 className='text-4xl mt-5 '>Here Is All Category </h1>
                </div>
                <div className='lg:py-36 grid gap-4 '>
                    <h1 className='text-5xl text-white'>Our Products</h1>
                    <div className='flex  justify-center gap-4 '>
                        {categories.map((category) => (
                            <button
                                onClick={() => handlebtn(category.name)}
                                className='btn border-0 hover:bg-gradient-to-l from-cyan-500 to-blue-500 text-black bg-white font-bold'
                                key={category.id}>
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default HomeCard;
