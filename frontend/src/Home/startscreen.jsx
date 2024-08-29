import React from "react";
import "../index.css";
import cyber from "../assets/cyber.png"
import hiasan from "../assets/hiasan.png"
import hiasan1 from "../assets/hiasan1.png"
import {useNavigate } from "react-router-dom";


const Laptop = () =>{
    const navigate = useNavigate();
    console.log("test")
    return(
        <div className="h-screen startscrlaptop columns-2 items-center flex">
            <div className="flex justify-center w-full">
                <div className="flex flex-col justify-center items-center w-sc">
                    <p className="text-cs poppins-black text-white color-white text-center">Pahami Nilai<br/>Keamanan Siber<br/>Pribadi</p>
                    <p className="text-sm poppins-medium text-white pl-4 pt-7 pb-20">Menciptakan keamanan dunia maya untuk lingkungan digital yang aman. Cycure<br/> membimbing Anda menguasai keterampilan yang dibutuhkan untuk meraihnya.</p>
                    <button onClick={() => navigate("/Learn")} className="px-3 py-2 w-48 text-[#1A0084] text-base poppins-bold bg-[#FD90FF]">Start Learning</button>
                </div>
            </div>
        </div>
    )
}

const Mobile = () =>{
    const navigate = useNavigate();
    return(
        <div className="w-full h-screen flex bg-[#3614CA]">
            <div className="flex flex-col w-full">
                <div className="w-full">
                    <img src={cyber} alt="" />
                </div>
                <div className="flex">
                    <div className="h-qs px-2">
                        <img src={hiasan} className="h-full" alt="" />
                    </div>
                    <div className="flex flex-col w-10/12 justify-start items-start">
                        <p className="text-bs poppins-semibold pb-8 pt-2 text-white color-white text-start">Learn personal<br/>cybersecurity</p>
                        <p className="text-lg poppins-medium pb-5 text-white">Menciptakan keamanan dunia maya untuk lingkungan digital yang aman.</p>
                        <button onClick={() => navigate("/Learn/main")} className="px-3 py-2 w-full text-[#1A0084] text-xl poppins-bold bg-[#FD90FF]">Start Learning</button>
                        <div className="bg-[#3DEDD0] w-full h-1 mt-4"/>
                        <p className="text-bs poppins-semibold pb-5 pt-5 text-white color-white text-start">Apa itu personal cybersecurity?</p>
                        <p className="text-lg text-justify poppins-medium text-white">Personal siber security adalah langkah-langkah yang diambil individu untuk melindungi diri dari ancaman siber.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Startscreen = () => {

    return (
        <div>
            <Laptop/>
        </div>
    )
}

export default Startscreen;