import React, { useEffect } from 'react'
import { useSocket } from '../../../context/SocketContext';
import useConversation from '../../../zustand store/useConversation';

function Community({community}) {
    const {selectedConversation, setSelectedConversation}= useConversation();
    const socket = useSocket();

    console.log(community);
    console.log("check point");

    const isSelected = selectedConversation?._id === community._id;

    const joinRoom = () => {
      console.log("halo")
      if (community && community._id) {
        socket.emit("join_room", `${community._id}`);
        console.log(`Joined room ${community._id}`);
      } else {
        console.error("Community object is empty or missing _id property");
      }
    }
    
    return(
        <div className="flex flex-col items-start w-full m-2 mt-px px-4">
            <button className={`text-white hover:bg-[#2200ff9f] poppins-medium text-base px-3 text-left w-full py-2 rounded-md ${isSelected ? "bg-[#2200ff9f]" : "bg-[#4a4375a4]"}`}
            onClick={() => {
              setSelectedConversation(community),
              joinRoom();
            }}
            >{community.name}</button>
        </div>
    )
}

export default Community;



