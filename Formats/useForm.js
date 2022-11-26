import { useState } from "react";

// npm install react-hook-form

import { useForm } from "react-hook-form";

const [signUpError, setSignUpError] = useState();

const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

<form onSubmit={handleSubmit(handleSignUp)}>
    <div className='form-control w-full'>
        <label htmlFor='name' className='label mt-2'>
            <span className='lebel-text'> Name</span>
        </label>
        <input
            className='input input-bordered w-full shadow-inner '
            type='Text'
            name='name'
            placeholder='Name'
            {...register("name", {
                required: { value: true, message: "Name is required" },
            })}
            aria-invalid={errors.name ? "true" : "false"}
        />
        {signUpError || (errors.name && <p className='text-red-700 text-[12px]'>{signUpError || errors.name.message}</p>)}

        <label htmlFor='email' className='label mt-2'>
            <span className='lebel-text'> Email</span>
        </label>
        <input
            className='input input-bordered w-full shadow-inner '
            type='email'
            name='email'
            placeholder='Email'
            {...register("email", {
                required: { value: true, message: "Email is required" },
            })}
            aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className='text-red-700 text-[12px]'>{errors.email.message}</p>}

        <label htmlFor='password' className='label mt-2'>
            <span className='lebel-text'> password</span>
        </label>
        <input
            className='input input-bordered w-full shadow-inner '
            type='password'
            name='password'
            placeholder='password'
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
    </div>
    <input type='submit' value='Sign up' className='w-full btn bg-neutral mt-4 text-[#D4D9E3]' />

    <p className='my-2'>
        Already Have an Account?{" "}
        <Link to='/login' className='text-[#19D3AE] text-[12px]'>
            please log in
        </Link>{" "}
    </p>
    <div className='divider'>OR</div>
</form>;
