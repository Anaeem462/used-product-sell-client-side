import React, { useContext, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/AuthProvider";
import Spinner from "./spinner/Spinner";
const Navbar = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    const isDashboard = location.pathname.split("/");

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

    const btnStyle = "hover:bg-gradient-to-l from-cyan-500 to-blue-500 rounded-md text-white";
    const navItems = (
        <>
            <li>
                <Link to='/' className={btnStyle}>
                    Home
                </Link>
            </li>

            <li>
                <Link to='/category' className={btnStyle}>
                    Product-Category
                </Link>
            </li>

            {user?.email ? (
                <>
                    <li className='font-sans' onClick={logOut}>
                        <Link className={btnStyle}>Log out</Link>
                    </li>
                    <li className='font-sans'>
                        <Link to='/dashboard' className={btnStyle}>
                            Dashboard
                        </Link>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to='/login' className={btnStyle}>
                            Log in
                        </Link>
                    </li>
                    <li>
                        <Link to='/signup' className={btnStyle}>
                            Sign Up
                        </Link>
                    </li>
                </>
            )}
            <li>
                <Link gto='/blog' className={btnStyle}>
                    Blog
                </Link>
            </li>
        </>
    );
    return (
        <div>
            <div className=' navbar  justify-between bg-gradient-to-bl from-[#08203e] to-[#557c93] py-5 md:rounded-t-md'>
                <div className='flex lg:grid w-full lg:w-auto   '>
                    <div className=' dropdown lg:hidden'>
                        <label tabIndex={0} className='btn btn-primary '>
                            <FaBars className='text-xl ' />
                        </label>
                        <ul className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-bl from-[#08203e] to-[#557c93] rounded-box w-52'>
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className={`self-center w-full flex justify-center`}>
                        <div className='flex items-center text-xl  text-white font-bold '>
                            <img src={logo} className='w-10 h-10' alt='' />
                            <span className='text-4xl text-yellow-500'>2</span>
                            <span>ND-SELL</span>
                        </div>
                    </Link>
                </div>
                {isDashboard[1] === "dashboard" && (
                    <label htmlFor='my-drawer-2' className='btn  btn-primary drawer-button ml-5 lg:hidden'>
                        <FaBars />
                    </label>
                )}
                <div className=' navbar-end hidden lg:flex'>
                    <ul className='menu menu-horizontal p-0'>{navItems}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
