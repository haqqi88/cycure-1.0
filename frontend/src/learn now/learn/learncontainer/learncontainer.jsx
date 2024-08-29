import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLearnContext } from "../../../context/LearnContext";
import PreTest from "../Pretest";
import { useAuthContext } from "../../../context/AuthContext";

const LearnContainer = () => {
    const navigate = useNavigate()
    const {progress, setProgress} = useLearnContext();
    const {progress2, setProgress2} = useLearnContext();
    const {progress3, setProgress3} = useLearnContext();
    const {chapter, setChapter} = useLearnContext();
    const {isNewUser, setIsNewUser} = useAuthContext();

    const Chapter2 = chapter >= 2 || isNewUser;
    const Chapter3 = chapter >= 3 || isNewUser;
    
    const handleOnClick = () => {
        if(isNewUser){
            navigate("/Learn/Pretest");
        }else{
            if(progress === 0 || progress === false || progress === true){
                setProgress(progress + 25);
            }
            navigate("/Learn/Chapter1");
        }
    };
    
    const handleOnClick2 = () => {
        if(isNewUser){
            navigate("/Learn/Pretest");
        }else{
            if(progress2 === 0|| progress2 === false || progress2 === true){
                setProgress2(progress2 + 25);
            }
            navigate("/Learn/Chapter2");
        }
    };
    
    const handleOnClick3 = () => {
        if(isNewUser){
            navigate("/Learn/Pretest");
        }else{
            if(progress3 === 0|| progress3 === false || progress3 === true){
                setProgress3(progress3 + 25);
            }
            navigate("/Learn/Chapter3");
        }
    };

    console.log(chapter);
    
    return(
        <div className="flex w-full bg-[#1a00c5]  rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15">
            <div className="p-8">
                <button type="button" onClick={() => handleOnClick()} className="Chapter w-80 h-40 bg-[#4700cc] rounded-2xl opacity-90 flex">
                <div className="m-5 flex flex-col text-start">
                    <h1 className="poppins-medium text-2xl text-white">Bagian 1</h1>
                    <ul className="list-disc ml-3 mt-2 poppins-medium text-white text-sm list-inside pb-2">
                        <li>Apa itu Keamanan siber</li>
                        <li>Serangan siber yang umum terjadi</li>
                    </ul>
                    <progress className="progress progress-accent w-56 h-4 mt-5 bg-[#1d087aad]" value={progress} max="100"></progress>
                </div>
                </button>
            </div>
            <div className="p-8">
                <button onClick={() =>handleOnClick2()} disabled={Chapter2 ? "" : "disabled"} className={`Chapter w-80 h-40 ${Chapter2 ? "bg-[#4700cc]" : "bg-[#4d4d4db2]"} rounded-2xl opacity-90 flex items-start`}>
                <div className="m-5 flex flex-col text-start">
                    <h1 className="poppins-medium text-2xl text-white">Bagian 2</h1>
                    <ul className="list-disc ml-3 mt-2 poppins-medium text-white text-sm list-inside pb-2">
                        <li>Macam serangan siber</li>
                        <li>Ketahui musuh anda</li>
                    </ul>
                    <progress className={`progress progress-accent mt-5 w-56 h-4 ${Chapter2 ? "bg-[#1d087aad]" : "bg-[#202020b2]"}`} value={progress2} max="100"></progress>
                </div></button>
            </div>
            <div className="p-8">
                <button onClick={() =>handleOnClick3()} disabled={Chapter3 ? "" : "disabled"} className={`Chapter w-80 h-40 ${Chapter3 ? "bg-[#4700cc]" : "bg-[#4d4d4db2]"} rounded-2xl opacity-90 flex items-start`}>
                <div className="m-5 flex flex-col text-start">
                    <h1 className="poppins-medium text-2xl text-white">Bagian 3</h1>
                    <ul className="list-disc ml-3 mt-2 poppins-medium text-white text-sm list-inside pb-2">
                        <li>Perbaiki Keamanan siber anda</li>
                        <li>Lindungi dirimu dari dirimu</li>
                        <li>Menangani Insiden Keamanan</li>
                    </ul>
                    <progress className={`progress progress-accent w-56 h-4 ${Chapter3 ? "bg-[#1d087aad]" : "bg-[#202020b2]"}`} value={progress3} max="100"></progress>
                </div></button>
            </div>
        </div>
    )
}

export default LearnContainer;