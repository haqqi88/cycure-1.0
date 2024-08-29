import React from "react";
import {useAuthContext} from '../../../context/AuthContext'
import { ExtractTime } from "../../../utils/extractTime";

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const fromMe = message.senderid === authUser._id;
    const name = fromMe ? authUser.username : message.username;
     const formattedTime = ExtractTime(message.createdAt);
    const chatClassName = !fromMe ? 'chat-start' : 'chat-end';
    const profilePic = message.profilePic;
    const bubbleBgColor = fromMe ? 'bg-blue-500' : '';

    console.log(`authuser${authUser._id} senderid${message}`)
    console.log(message)

    return (
        <div>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-header text-cssm poppins-medium">{name} <time className="text-xs opacity-70">{formattedTime}</time></div>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={profilePic} alt="" />
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
            </div>
        </div>
    )
}

export default Message;