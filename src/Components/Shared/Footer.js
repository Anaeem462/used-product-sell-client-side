import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
const Footer = () => {
    return (
        <footer className='footer footer-center p-10 bg-neutral text-white rounded-t-md'>
            <div className='grid grid-flow-col gap-4'>
                <Link to='/' className='link link-hover'>
                    About us
                </Link>
                <Link to='/' className='link link-hover'>
                    Contact
                </Link>
                <Link to='/' className='link link-hover'>
                    Jobs
                </Link>
                <Link to='/' className='link link-hover'>
                    Press kit
                </Link>
            </div>
            <div>
                <p>author : Abdullah Naeem</p>
                <div className='grid grid-flow-col gap-4 text-xl'>
                    <FcGoogle /> <FaGithub />
                </div>
            </div>
            <div className='text-xl '>
                <p className='text-xl'>Copyright © 2022 - programming hero</p>
            </div>
        </footer>
    );
};

export default Footer;
