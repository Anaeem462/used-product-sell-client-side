import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Spinner from "../../../Shared/spinner/Spinner";
import { AuthContext } from "./../../../../Context/AuthProvider";

const MyBuyers = () => {
    const { user } = useContext(AuthContext);

    const { data, isLoading } = useQuery({
        queryKey: ["mybuyers", user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/mybuyers?email=${user?.email}`, {
                headers: { authorization: localStorage.getItem("userToken") },
            });
            const data = await res.json();
            return data;
        },
    });
    if (isLoading && !user?.email) {
        return <Spinner></Spinner>;
    }

    return (
        <div>
            <div className='overflow-x-auto mt-4'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>location</th>
                            <th>payment status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((product, i) => (
                            <tr key={product._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>{product?.buyerName}</td>
                                <td>{product?.buyerEmail}</td>
                                <td>{product?.buyerPhone}</td>
                                <td className='max:w-[10px]'>{product?.buyerLocation}</td>
                                <td>
                                    <button className='btn btn-xs btn-success'>{product?.payment === "paid" ? "PAID" : "not pay"}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyers;
