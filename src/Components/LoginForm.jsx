import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({ setIsLoggedIn }) {
  
    const [formData, setFormData] = useState({
        email: "", password: ""
    });

    const navigate = useNavigate();

    function changeHandler (event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    const [showPassword, setShowPassword] = useState(false);

    function submitHandler (event)  {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");

        const accountData = {
            ...formData
        }

        console.log("Printing account data: ");
        console.log(accountData);
        navigate("/dashboard");
    }

    return (
    
        <form onSubmit={submitHandler}
              className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full' >
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
            <input
                required
                type='email'
                placeholder='Enter your email id'
                value={formData.email}
                name='email'
                onChange={changeHandler}
                className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]'
            />
            </label>


            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>

                <input
                    required
                    type= { showPassword? ("text") : ("password")}
                    placeholder='Enter your password'
                    value={formData.password}
                    name='password'
                    onChange={changeHandler}
                    className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]'
                />

                <span 
                className='absolute right-3 top-[38px] cursor-pointer'
                onClick={ () => setShowPassword((prev) => !prev )}>
                    {showPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                                   (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 ml-auto max-w-max'>
                        Forgot password
                    </p>
                </Link>
            </label>

            <button className='bg-yellow-500 w-full text-richblack-900 rounded-[8px] font-medium px-[12px] py-[8px] mt-6'>
                Sign In
            </button>
        </form>
    
  )
}

export default LoginForm