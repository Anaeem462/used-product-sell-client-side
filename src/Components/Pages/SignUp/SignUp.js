import React, { useContext } from "react";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import saveUser from "./../../../utilities/function/saveUser";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    //location
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";

    // form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        // create user in firebase
        createUser(email, password)
            .then((result) => {
                if (result.user) {
                    toast.success("successfully create user");
                    //save user in mongodb and get token from server also set token in localstorage
                    saveUser(email, name, role, password, "", from, navigate);
                }

                console.log(result.user);
            })
            .catch((err) => {
                toast.error(err.message);
                console.log(err);
            });
    };
    const handleGoogleSignUp = () => {};
    return (
        <div className='flex items-center justify-center my-12'>
            {" "}
            <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                <form onSubmit={handleSubmit} className='card-body'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Your Name</span>
                        </label>
                        <input type='text' placeholder='Name' name='name' className='input input-bordered' />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input type='email' placeholder='email' name='email' className='input input-bordered' />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='password' name='password' className='input input-bordered' />
                    </div>
                    <div className='flex items-center justify-evenly my-2'>
                        <div className='flex items-center'>
                            <input type='radio' className='radio mr-2 radio-info' id='user' name='role' value='User' defaultChecked />
                            <label htmlFor='user'>User</label>
                        </div>

                        <div className='flex items-center'>
                            <input type='radio' className='radio mr-2 radio-info' id='seller' name='role' value='Seller' />
                            <label htmlFor='seller'>Seller</label>
                        </div>
                    </div>

                    <div className='form-control mt-6'>
                        <button className='btn btn-primary'> Sign up</button>
                    </div>

                    <FcGoogle className='text-3xl btn w-full btn-outline my-3 py-2' onClick={handleGoogleSignUp} />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
