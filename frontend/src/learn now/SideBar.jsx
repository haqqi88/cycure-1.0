import React from "react";
import Logo2 from "../assets/logo2.png"
import Home from "../assets/Home.png"
import { useNavigate } from "react-router-dom";
import SetClick from "./Sidebarsetup/Setclick";
import LearnClick from "./Sidebarsetup/learnClick";
import DiscussClick from "./Sidebarsetup/Discussclicl";

const SideBar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-between bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15">
            <div className="grid justify-items-center p-3 pt-5">
                <img src={Logo2} alt="" />
                <h1 className="poppins-semibold text-mini">CYCURE</h1>
            </div>
            <div className="gap-4 pb-10">
                <div className="grid justify-items-center p-3">
                    <button onClick={()=> navigate("/")}><img src={Home} alt="" /></button>
                    <h1 className="poppins-semibold text-xs">HOME</h1>
                </div>
                <LearnClick/>
                <DiscussClick/>
            </div>
            <SetClick/>
        </div>
    )
}

export default SideBar;