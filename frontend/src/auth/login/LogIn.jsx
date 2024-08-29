import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username,password);
    }

    return (
        <div className="h-screen w-full learn-beckground flex flex-col items-center justify-center">
            <div className="min-w-96 flex flex-col mx-auto justify-center items-center">
                <div className="w-full p-6 rounded-lg bg-[#3614CA]">
                    <h1 className="text-3xl pb-3 poppins-semibold text-center text-white">
                        Login 
                        <span className="text-[#3DEDD0]"> Cycure</span>
                        </h1>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="label">
                                <span className="text-base text-gray-300 poppins-light label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Enter username" className="text-base poppins-light w-full input input-bordered h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="text-base text-gray-300 poppins-light label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter password" className="text-base poppins-light w-full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Link to={"/Signup"} className="pl-1 pt-3 text-gray-300 text-sm poppins-regular hover:underline hover:text-blue-600 mt-2 inline-block">Tidak punya akun?</Link>

                        <div>
                            <button className="btn btn-block btn-sm mt-2"
                            disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LogIn;