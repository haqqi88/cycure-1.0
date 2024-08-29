import React from "react";
import MessageInput from "./MessageInput";
import Messages from "./messages";

const MessageContainer = () => {
    return (
        <div className="flex flex-col w-3/4  bg-[#2200ff] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
                <Messages/>
                <MessageInput/>
        </div>
    )
}

export default MessageContainer;