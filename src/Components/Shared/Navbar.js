import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
    const navItems = (
        <>
            <li>
                <Link to='/login'>Log in</Link>
            </li>
            <li>
                <Link to='/signup'>Sign Up</Link>
            </li>
        </>
    );
    return (
        <div>
            <div className='navbar bg-base-100'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost  lg:hidden'></label>
                        <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                            {navItems}
                        </ul>
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