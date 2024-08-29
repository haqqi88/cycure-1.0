import { useState } from "react"
import toast from "react-hot-toast"
import useConversation from "../zustand store/useConversation"
import io from "socket.io-client"
import { useAuthContext } from "../context/AuthContext"

const useSendMessage = () => {
    const[loading, setloading] = useState(false)
    const {messages, setMessages, selectedConversation} = useConversation();
    const socket = io();
    const {authUser} = useAuthContext();

    const sendMessage = async (message) => {
        setloading(true);
        try{
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({message})
            })
            const data = await res.json()
            if(data.error) throw new Error(data.error)
                
                setMessages([...messages,data]);

                socket.emit("sendMessage", {
                    conversationId: selectedConversation._id,
                    senderId: authUser._id, // Replace with the actual user ID
                    message: data,
                });
            }catch(error){
                if(error.message = "Cannot read properties of null (reading '_id')") toast.error("please select the room")
                else toast.error(error.message);
        }finally{
            setloading(false);
        }
    }
    return{sendMessage,loading}
}

export default useSendMessage;