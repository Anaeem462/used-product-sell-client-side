import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import saveUser from "../../../utilities/function/saveUser";

const LogIn = () => {
    const { login, googleSignin, updateUserProfile } = useContext(AuthContext);

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

        // create user in firebase
        login(email, password)
            .then((result) => {
                if (result.user) {
                    // toast.success("successfully create user");
                    //save user in mongodb and get token from server also set token in localstorage
                    saveUser(email, name, "", password, "", from, navigate);
                }

                console.log(result.user);
            })
            .catch((err) => {
                toast.error(err.message);
                console.log(err);
            });
    };
    const handleGoogleSignUp = () => {
        googleSignin()
            .then((result) => {
                // toast.success("successfully google sign in");
                saveUser(result.user.email, result.user.displayName, "", result.user.uid, result.providerId, from, navigate);
                console.log(result);
            })
            .catch((err) => {
                // toast.error(err.message);
                console.log(err);
            });
    };
    return (
        <div className='flex items-center justify-center my-12'>
            {" "}
            <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                <form onSubmit={handleSubmit} className='card-body'>
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
                    <p>
                        Don't have an account? <Link to='/signup'>sign up</Link>
                    </p>
                    <div className='form-control mt-6'>
                        <button className='btn btn-primary'> Log in</button>
                    </div>

                    <FcGoogle className='text-3xl btn w-full btn-outline my-3 py-2' onClick={handleGoogleSignUp} />
                </form>
            </div>
        </div>
    );
};

export default LogIn;
