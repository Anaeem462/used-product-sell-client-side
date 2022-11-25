import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
    const data = useLoaderData();
    console.log(data);
    return <div>this is category</div>;
};

export default Category;
