import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
const Navbar = () => {
    const handleOnSelect = (e) => {
        const id = e.target.value;
    };

    const navItems = (
        <>
            <li>
                <Link to='/login'>Log in</Link>
            </li>
            <li>
                <Link to='/signup'>Sign Up</Link>
            </li>

            <li>
                <select name='category' id='' className='select w-full px-5 mx-3 rounded-md'>
                    <option value='Iphone'>Category</option>
                    <option value='Iphone'>
                        {" "}
                        <Link to={`/category/Iphone`}>Iphone</Link>
                    </option>
                    <option value='Xiaomi'>
                        <Link to={`/category/xiaomi`}>xiaomi</Link>
                    </option>
                    <option value='Poco'>
                        <Link to={`/category/poco`}>Poco</Link>
                    </option>
                </select>
            </li>
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
