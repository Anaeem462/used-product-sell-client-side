import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import Spinner from "../../../Shared/spinner/Spinner";
import { toast } from "react-hot-toast";

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
    const handleDelete = (product) => {
        console.log(product);

        fetch(`${process.env.REACT_APP_SERVER_URL}/products?id=${product._id}`, {
            method: "DELETE",
            headers: { authorization: localStorage.getItem("userToken") },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.deletedCount > 0) {
                    refetch();
                    toast.success("successfully deleted");
                }
            })
            .catch((err) => console.log(err));
        // console.log(data);
    };
    return (
        <div>
            <div className='overflow-x-auto'>
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
                                    <img className='w-10 h-10' src={product.productImage} alt='' />
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.procutPrice}</td>
                                <td>
                                    <button className='btn btn-xs btn-primary'>pay</button>
                                </td>
                                <td>
                                    <button className='btn btn-xs btn-error' onClick={() => handleDelete(product)}>
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

export default MyOrders;
