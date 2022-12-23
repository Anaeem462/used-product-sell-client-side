import React, { useContext, useState } from "react";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import saveUser from "./../../../utilities/function/saveUser";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import Spinner from "../../Shared/spinner/Spinner";

const SignUp = () => {
    const { createUser, googleSignin, updateUserProfile, loading } = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState();
    //location
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    // form submit handler
    const onSubmit = (data) => {
        const { name, email, password, role } = data;
        // console.log(data);
        setSignUpError("");
        // create user in firebase
        createUser(email, password)
            .then((result) => {
                if (result.user) {
                    //set user name in profile

                    updateUserProfile(name)
                        .then(() => {
                            // toast.success("successfully create user");

                            //save user in mongodb and get token from server also set token in localstorage

                            saveUser(email, name, role, password, "", from, navigate);
                        })
                        .catch((err) => {
                            toast.error("set name unsuccessfull");
                            setSignUpError(err.message);
                            // console.log("update- profie", err.message);
                        });
                }

                // console.log( result.user);
            })
            .catch((err) => {
                toast.error(err.message);
                console.error("sign up js line-49", err.message);
            });
    };

    const handleGoogleSignUp = () => {
        setSignUpError("");
        googleSignin()
            .then((result) => {
                // toast.success("successfully google sign in");

                //save user in mongodb and get token from server also set token in localstorage

                saveUser(result.user.email, result.user.displayName, "user", result.user.uid, result.providerId, from, navigate);
                console.log("sign up js line-59", result);
            })
            .catch((err) => {
                toast.error(err.message);
                setSignUpError(err.message);
                console.error("sign up js line-65", err.message);
            });
    };
    return (
        <div className='flex items-center justify-center my-12'>
            {" "}
            <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
                    {/*----------------input user name----------------- */}

                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Your Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Name'
                            name='name'
                            className='input input-bordered'
                            {...register("name", {
                                required: { value: true, message: "name is required" },
                            })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {signUpError || (errors.name && <p className='text-red-700 text-[12px]'>{signUpError || errors.name.message}</p>)}

                        {/*----------------input user email----------------- */}

                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input
                            type='email'
                            placeholder='email'
                            name='email'
                            className='input input-bordered'
                            {...register("email", {
                                required: { value: true, message: "email is required" },
                            })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {signUpError || (errors.email && <p className='text-red-700 text-[12px]'>{signUpError || errors.email.message}</p>)}

                        {/*----------------input user password----------------- */}

                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='password'
                            name='password'
                            className='input input-bordered'
                            {...register("password", {
                                required: { value: true, message: "password is required" },
                                minLength: { value: 8, message: "password at least 8 digit" },
                                pattern: {
                                    value: /(?=.*[A-za-z])(?=.*[@$%&!+*/-])(?=.*[0-9])/,
                                    message: `password must have a letter,a special character and a number`,
                                },
                            })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p className='text-red-700 text-[12px]'>{errors.password.message}</p>}

                        {/*----------------input user role----------------- */}
                        <select {...register("role")} className='select select-bordered w-full  my-2'>
                            <option value='user' defaultValue='user'>
                                User
                            </option>
                            <option value='host'>Seller</option>
                        </select>
                    </div>
                    {/*-----------------link to log in--------------- */}
                    <p>
                        Already have an account?{" "}
                        <Link to='/login' className='hover:link text-blue-500 font-bold'>
                            log in
                        </Link>
                    </p>

                    {/*----------------sign up submit button----------------- */}
                    <button className='w-full btn bg-neutral mt-4 text-white'>
                        {loading ? <Spinner spinnerParent={""} spinnerProps='w-6 h-6' /> : "Sign Up"}
                    </button>

                    {/*----------------sign up by google----------------- */}

                    <FcGoogle className='text-3xl btn w-full btn-outline my-3 py-2' onClick={handleGoogleSignUp} />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
