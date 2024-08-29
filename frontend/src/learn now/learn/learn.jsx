import React from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import SideBar from "../SideBar";
import LearnContainer from "./learncontainer/learncontainer";
import LearnChapter1 from "./learncontainer/Chapter 1/learnCh1";
import LearnChapter2 from "./learncontainer/Chapter 2/learnCh2";
import LearnChapter3 from "./learncontainer/Chapter 3/learnCh3";
import PostTestChapter1 from "./learncontainer/Chapter 1/postestCh1";
import PostTestChapter2 from "./learncontainer/Chapter 2/postestCh2";
import PostTestChapter3 from "./learncontainer/Chapter 3/postestCh3";
import PreTest from "./Pretest";
import panduanPengguna from "./panduanpengguna";

const Learn = () => {
    const {isNewUser} = useAuthContext();

    const {ch} = useParams();
    let Page;
    if((ch === undefined)  && isNewUser){
        Page = panduanPengguna;
    }else if(ch === "main" || ch === undefined){
        Page = LearnContainer;
    }else if(ch == "Pretest"){
        Page = PreTest;
    }else if(ch === "Chapter1"){
        Page = LearnChapter1;
    }else if(ch === "Chapter2"){
        Page = LearnChapter2;
    }else if(ch === "Chapter3"){
        Page = LearnChapter3;
    }else if(ch === "PostestCh1"){
        Page = PostTestChapter1;
    }else if(ch === "PostestCh2"){
        Page = PostTestChapter2;
    }else if(ch === "PostestCh3"){
        Page = PostTestChapter3;
    }

    return (
        <div className="learn-beckground p-3 gap-3 h-screen w-screen flex overflow-hidden">
            <SideBar/>
            <Page/>
        </div>
    )
}

export default Learn;