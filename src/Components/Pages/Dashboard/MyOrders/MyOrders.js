import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import Spinner from "../../../Shared/spinner/Spinner";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["userOrders"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/userOrders`, {
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
    // ordersProducts, remainningProducts
    const handleDelete = (product) => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/orders?id=${product._id}`, {
            method: "DELETE",
            headers: { authorization: localStorage.getItem("userToken") },
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                if (result.deletedCount > 0) {
                    refetch();
                    toast.success("successfully deleted");
                }
            })
            .catch((err) => {
                toast.error(err.message);
                // console.log(err);
            });
        // console.log(data);
    };

    return (
        <div>
            <div className='overflow-x-auto my-4 '>
                {data.length ? (
                    <table className='table w-full shadow-xl'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>image</th>
                                <th>title</th>
                                <th>price</th>
                                <th>payment</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((product, i) => (
                                <tr key={product._id} className='hover'>
                                    <th>{i + 1}</th>
                                    <td>
                                        <img className='w-10 h-10' src={product.productImage} alt='' />
                                    </td>
                                    <td>{product.productName}</td>
                                    <td>${product.productPrice}</td>
                                    <td>
                                        <Link
                                            to={`/dashboard/payments/${product._id}`}
                                            disabled={product?.payment === "paid"}
                                            className='btn btn-xs btn-primary'>
                                            {product?.payment === "paid" ? "paid" : "pay"}
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className='btn btn-xs btn-error'
                                            disabled={product?.payment === "paid"}
                                            onClick={() => handleDelete(product)}>
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div>
                        <p className='text-4xl text-red-600 text-center'>'No Orders selected Yet'</p>
                        <div className='flex justify-center mt-4'>
                            <Link to='/' className='btn btn-primary'>
                                please select a category
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
