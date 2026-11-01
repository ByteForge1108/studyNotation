import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


function SignupForm({ setIsLoggedIn }) {
  
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
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

    function submitHandler (event) {
        event.preventDefault();
        if(formData.password!==formData.confirmPassword){
            toast.error("Password doesm't match !!");
            return;
        }
        else{
            setIsLoggedIn(true);
            toast.success("Account created !!");
            const accountData = {
                ...formData
            };

            console.log("Printing account data: ");
            console.log(accountData);
            navigate("/dashboard");
        }

    }

    return (
    <div>
        {/* student-Instructor- tab */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        {/* firstName and lastName */}
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        placeholder='Enter First Name'
                        onChange={changeHandler}
                        value={formData.firstName}
                    />
                </label>

                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastName'
                        placeholder='Enter Last Name'
                        onChange={changeHandler}
                        value={formData.lastName}
                    />
                </label>
            </div>

        {/* email addrss */}
                <label>
                    <p>Email<sup>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        placeholder='Enter email id'
                        onChange={changeHandler}
                        value={formData.email}
                    />
                </label>
        {/* password and confirmPassword */}
        <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input
                        required
                        type= {showPassword? ("text") : ("password")}
                        name='password'
                        placeholder='Enter password'
                        onChange={changeHandler}
                        value={formData.password}
                    />
                    <span onClick={ () => setShowPassword((prev) => !prev )}>
                        {showPassword? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type= {showPassword? ("text") : ("password")}
                        name='confirmPassword'
                        placeholder='Confirm password'
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                    />
                    <span onClick={ () => setShowPassword((prev) => !prev )}>
                        {showPassword? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </label>            
        </div>

        <button>
            Create Account
        </button>


        </form>
    </div>
  )
}

export default SignupForm;