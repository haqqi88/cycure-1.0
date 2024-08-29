import { useEffect, useState } from "react"
import useConversation from "../zustand store/useConversation";
import toast from "react-hot-toast";
import io from "socket.io-client"

const useGetMessages =() => {
    const [loading, setloading] = useState(false);
    const {messages, setMessages, selectedConversation} =useConversation();
    const socket = io();

    useEffect(()=>{        
        const getMessages = async ()=>{
            setloading(true);
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await res.json();
                if(data.error) throw new Error(data.error);
                setMessages(data)
            } catch (error) {
                toast.error(error.messages)
            }finally{
                setloading(false);
            }
        }

        if(selectedConversation?._id) getMessages();
    },[selectedConversation?._id, setMessages])

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
          if (selectedConversation?._id === newMessage.conversationId) {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
          }
        });
      }, [selectedConversation?._id, setMessages]);

    return {messages,loading}
}
export default useGetMessages;