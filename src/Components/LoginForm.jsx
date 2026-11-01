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
        navigate("/dashboard");
    }

    return (
    <div>
        <form onSubmit={submitHandler}>
            <label >
                <p>
                    Email Address<sup>*</sup>
                </p>
            <input
                required
                type='email'
                placeholder='Enter your email id'
                value={formData.email}
                name='email'
                onChange={changeHandler}
            />
            </label>


            <label >
                <p>
                    Password<sup>*</sup>
                </p>

                <input
                    required
                    type= { showPassword? ("text") : ("password")}
                    placeholder='Enter your password'
                    value={formData.password}
                    name='password'
                    onChange={changeHandler}
                />

                <span onClick={ () => setShowPassword((prev) => !prev )}>
                    {showPassword? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>

                <Link to="#">
                    <p>
                        Forgot password
                    </p>
                </Link>
            </label>

            <button>
                Sign In
            </button>
        </form>
    </div>
  )
}

export default LoginForm