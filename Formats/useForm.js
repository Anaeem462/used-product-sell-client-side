import { useState } from "react";
import { useForm } from "react-hook-form";

const [signUpError, setSignUpError] = useState();

const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

<form onSubmit={handleSubmit(handleAddDoctor)}>
    <div className='form-control w-full'>
        <div>
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
        </div>
    </div>
    <input type='submit' value='ADD Doctor' className='w-full btn bg-neutral mt-4 text-[#D4D9E3]' />

    {/* <div className='divider'>OR</div> */}
</form>;
