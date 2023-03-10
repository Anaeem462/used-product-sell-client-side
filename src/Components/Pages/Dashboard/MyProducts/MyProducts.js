import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";
import Spinner from "../../../Shared/spinner/Spinner";
import { toast } from "react-hot-toast";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["myproducts", user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/myproducts?email=${user?.email}`, {
                headers: { authorization: localStorage.getItem("userToken") },
            });
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Spinner></Spinner>;
    }
    if (!user.email) {
        return refetch();
    }

    const handleAdvertise = () => {};
    const handleDelete = (product) => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/myproducts?id=${product._id}`, {
            method: "DELETE",
            headers: { authorization: localStorage.getItem("userToken") },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletCount > 0) {
                    toast.success("successfully deleted item");
                }
                refetch();
                // console.log(result);
            })
            .catch((err) => {
                toast.error(err.message);
                // console.log(err.message);
            });
    };
    return (
        <div>
            {" "}
            <div className='overflow-x-auto mt-8'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>title</th>
                            <th>price</th>
                            <th></th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((product, i) => (
                            <tr key={product._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>
                                    <img className='w-10 h-10' src={product.poduct_Image} alt='' />
                                </td>
                                <td>{product.name}</td>
                                <td>${product.resale_Price || product.resale_price}</td>
                                <td>
                                    <Link onClick={() => handleAdvertise(product)} className='btn btn-xs btn-primary'>
                                        {product.payment ? "sold" : "unsold"}
                                    </Link>
                                </td>
                                <td>
                                    <button className='btn btn-xs btn-error' disabled={product?.payment} onClick={() => handleDelete(product)}>
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;
