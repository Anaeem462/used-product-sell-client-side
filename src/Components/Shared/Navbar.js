import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/AuthProvider";
import Spinner from "./spinner/Spinner";
const Navbar = () => {
    const { state } = useLocation();
    const { user, logOut } = useContext(AuthContext);

    // useEffect(() => {
    //     if (user?.email) {
    //         fetch(`${process.env.REACT_APP_SERVER_URL}/users?email=${user?.email}`, {
    //             headers: { authorization: localStorage.getItem("userToken") },
    //         })
    //             .then((res) => res.json())
    //             .then((result) => console.log(result))
    //             .catch((err) => console.log(err));
    //     }
    // }, [user?.email]);

    const handleOnSelect = (e) => {
        const id = e.target.value;
    };

    const navItems = (
        <>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/category'>Product-Category</Link>
            </li>

            {user?.email ? (
                <>
                    <li className='font-sans' onClick={logOut}>
                        <Link>Log out</Link>
                    </li>
                    <li className='font-sans'>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to='/login'>Log in</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Sign Up</Link>
                    </li>
                </>
            )}
        </>
    );
    return (
        <div>
            <div className='navbar bg-base-100'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost  lg:hidden'>
                            <FaBars />
                        </label>
                        <ul className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>{navItems}</ul>
                    </div>
                    <Link to='/' className='btn btn-ghost normal-case text-xl'>
                        <img src={logo} className='w-10 h-10' alt='' /> <span className='text-4xl text-yellow-500'>2</span> ND-SELL
                    </Link>
                </div>
                <div className='navbar-end hidden lg:flex'>
                    <ul className='menu menu-horizontal p-0'>{navItems}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
