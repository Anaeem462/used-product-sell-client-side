import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";
import useHost from "../../../../utilities/hooks/UseHost";
import Navbar from "../../../Shared/Navbar";
import Spinner from "../../../Shared/spinner/Spinner";
import useAdmin from "./../../../../utilities/hooks/useAdmin";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const [isHost] = useHost(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className='drawer drawer-mobile'>
                <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
                <div className={`drawer-content bg-gradient-to-tr to-[#40c9ff] from-[#e81cff] flex justify-center`}>
                    <Outlet></Outlet>
                </div>
                <div className='drawer-side'>
                    <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
                    <ul className='menu p-4 w-60 bg-gradient-to-br font-bold text-xl from-[#557c93] to-[#08203e]  text-white '>
                        {/* <!-- Sidebar content here --> */}

                        {!isHost && !isAdmin && (
                            <li>
                                <Link to='/dashboard'>MY Orders</Link>
                            </li>
                        )}

                        {isHost && (
                            <>
                                <li>
                                    <Link to='/dashboard/addproduct'>Add Products</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/myproducts'>My Products</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/mybuyers'>My Buyers</Link>
                                </li>
                            </>
                        )}
                        {!isHost && isAdmin && (
                            <>
                                <li>
                                    <Link to='/dashboard/allsellers'>All Sellers</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/allbuyers'>All Buyers</Link>
                                </li>
                                <li>
                                    <Link to='/reporteditems'>reported items</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
