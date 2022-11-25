import React, { useState } from "react";
import Spinner from "../../../Shared/spinner/Spinner";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const AllBuyers = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["allbuyers"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/allbuyers`, {
                headers: { authorization: localStorage.getItem("userToken") },
            });
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Spinner></Spinner>;
    }

    const handleMakeHost = (user) => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/user?id${user._id}`, {
            method: "PUT",
            headers: { authorization: localStorage.getItem("userToken") },
            body: JSON.stringify({ role: "host" }),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    toast.success("successfully deleted item");
                }
                refetch();
                console.log(result);
            })
            .catch((err) => console.log(err.message));
    };
    const handleDelete = (user) => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/user?id${user._id}`, {
            method: "DELETE",
            headers: { authorization: localStorage.getItem("userToken") },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletCount > 0) {
                    toast.success("successfully deleted item");
                }
                refetch();
                console.log(result);
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <div>
            {" "}
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>name</th>
                            <th>email</th>
                            <th>role</th>
                            <th></th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((user, i) => (
                            <tr key={user._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td>
                                    <Link onClick={() => handleMakeHost(user)} className='btn btn-xs btn-primary'>
                                        make-host
                                    </Link>
                                </td>
                                <td>
                                    <button className='btn btn-xs btn-error' onClick={() => handleDelete(user)}>
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

export default AllBuyers;
