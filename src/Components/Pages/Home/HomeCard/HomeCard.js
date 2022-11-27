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
            <div className='text-center   bg-blue-500 grid rounded-b-md  md:grid-cols-2 gap-4'>
                <div className='border-r-2 border-white py-36 text-white '>
                    <h1 className='text-7xl mt-7 '>What Do You Want?</h1>
                    <h1 className='text-4xl my-4'>Here Is All Category</h1>
                </div>
                <div className='py-36'>
                    <h1 className='text-5xl my-4 font-sans text-white'>Our Products</h1>
                    <div className='flex  justify-center gap-8 '>
                        {categories.map((category) => (
                            <button onClick={() => handlebtn(category.name)} className='btn btn-warning text-white' key={category.id}>
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
