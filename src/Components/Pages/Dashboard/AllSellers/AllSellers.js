import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Spinner from "../../../Shared/spinner/Spinner";

const AllSellers = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["allsellers"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/allsellers`, {
                headers: { authorization: localStorage.getItem("userToken") },
            });
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Spinner></Spinner>;
    }
    const handleApprove = () => {};
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
                                    <Link onClick={() => handleApprove(user)} className='btn btn-xs btn-primary'>
                                        approved
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

export default AllSellers;
