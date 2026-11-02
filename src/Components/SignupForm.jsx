import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


function SignupForm({ setIsLoggedIn }) {
  
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    });

    const [accountType, setAccountType] = useState("student");

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
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function submitHandler (event) {
        event.preventDefault();
        if(formData.password!==formData.confirmPassword){
            toast.error("Password doesm't match !!");
            return;
        }
        else{
            setIsLoggedIn(true);
            toast.success("Account created !!");
            const finalAccountData = {
                ...formData, 
                accountType
            };

            console.log("Printing Final account data: ");
            console.log(finalAccountData);
            navigate("/dashboard");
        }

    }

    return (
    <div>
        {/* student-Instructor- tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button 
            className={`${accountType === "student"? 
            "bg-richblack-900 text-richblack-5" : 
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("student")}>
                Student
            </button>
            <button 
            className={`${accountType === "instructor"? 
            "bg-richblack-900 text-richblack-5" : 
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        {/* firstName and lastName */}
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        First Name<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        placeholder='Enter First Name'
                        onChange={changeHandler}
                        value={formData.firstName}
                        className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Last Name<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastName'
                        placeholder='Enter Last Name'
                        onChange={changeHandler}
                        value={formData.lastName}
                        className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]'
                    />
                </label>
            </div>

        {/* email addrss */}
            <div className='mt-[20px]'>
<label className='mt-4 w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        placeholder='Enter email id'
                        onChange={changeHandler}
                        value={formData.email}
                        className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]'
                    />
                </label>
            </div>   
        {/* password and confirmPassword */}
        <div className='w-full flex gap-x-4 mt-[20px]'>
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showPassword? ("text") : ("password")}
                        name='password'
                        placeholder='Enter password'
                        onChange={changeHandler}
                        value={formData.password}
                        className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]'
                    />
                    <span 
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={ () => setShowPassword((prev) => !prev )}>
                        {showPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                                       (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showConfirmPassword? ("text") : ("password")}
                        name='confirmPassword'
                        placeholder='Confirm password'
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px]'
                    />
                    <span 
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={ () => setShowConfirmPassword((prev) => !prev )}>
                        {showConfirmPassword? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :                 
                                       (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>            
        </div>

        <button className='w-full bg-yellow-500 text-richblack-900 rounded-[8px] font-medium px-[12px] py-[8px] mt-6'>
            Create Account
        </button>


        </form>
    </div>
  )
}

export default SignupForm;