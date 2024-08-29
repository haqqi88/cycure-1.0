import React, { useState } from "react";
import Logo from "../assets/logo.svg"
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const NavBar = () => {
    const {AuthUser} = useAuthContext();
    return (
        <nav className="flex justify-between bg-[#4604B1] h-20 items-center w-full fixed px-12 pb-2">
            <img src={Logo} alt="" />

            <div className="flex gap-x-12  text-base poppins-medium text-white pt-2 color-white">
            <a href="#home" className="hover:text-orange-400">Home</a>
            <a href="#about" className="hover:text-orange-400">About</a>
            <a href="#" className="hover:text-orange-400">Cycure</a>
            <a href="#" className="hover:text-orange-400">Contact</a>
            </div>

            <Link to={ "/Learn"}  className="text-lg font-medium text-neutral-50">Learn now</Link>
        </nav>
    )
}

export default NavBar;