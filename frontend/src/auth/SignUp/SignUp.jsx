import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./Checkbox";
import useSignup from "../../hooks/useSignup";

 const SignUp = () => {
    const [inputs,setInputs] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        await signup(inputs);
    }
    return(
        <div className="h-screen w-full learn-beckground flex flex-col items-center justify-center">
            <div className="min-w-96 flex flex-col mx-auto justify-center items-center">
                <div className="w-full p-6 rounded-lg bg-[#3614CA]">
                    <h1 className="text-3xl pb-3 poppins-semibold text-center text-white">
                        SignUp 
                        <span className="text-[#3DEDD0]"> Cycure</span>
                        </h1>

                    <form onSubmit={handleSubmit}>
                        {/*username*/}
                        <div>
                            <label className="label">
                                <span className="text-base text-gray-300 poppins-light label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Enter username" className="text-base poppins-light w-full input input-bordered h-10"
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})}
                            />
                        </div>

                        {/*password*/}
                        <div>
                            <label className="label">
                                <span className="text-base text-gray-300 poppins-light label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter password" className="text-base poppins-light w-full input input-bordered h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                            />
                        </div>

                        {/*confirm password*/}
                        <div>
                            <label className="label">
                                <span className="text-base text-gray-300 poppins-light label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Enter password" className="text-base poppins-light w-full input input-bordered h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                            />
                        </div>

                        {/*gender auth*/}
                        <GenderCheckbox onCheckboxChange= {handleCheckboxChange} selectedGender={inputs.gender}/>

                        <Link to={'/Login'} className="pl-1 pt-3 text-gray-300 text-sm poppins-regular hover:underline hover:text-blue-600 mt-4 inline-block">Sudah punya akun?</Link>

                        <div>
                            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                                {loading ? <span className=" loading loading-spinner"></span> : "Sign Up"}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
 }

 export default SignUp;