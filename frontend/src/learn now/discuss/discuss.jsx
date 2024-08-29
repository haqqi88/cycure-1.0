import React from "react";
import SideBar from "../SideBar";
import MessageContainer from "./messagecontainer/messagecontainer";
import Communities from "./community/communities";

const Discuss = () => {
    return (
        <div className="learn-beckground gap-3 p-3 h-screen w-screen flex">
            <SideBar/>
            <Communities/>
            <MessageContainer/>
        </div>
    )
}

export default Discuss;