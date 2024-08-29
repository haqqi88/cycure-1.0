import { useEffect,useRef } from "react";
import useGetMessages from "../../../hooks/useGetMessages";
import Message from "./message"
import MessageSkeleton from "./skeleton/messageskeleton";
import useListenMessages from "../../../hooks/useListenMessages";

const Messages = () => {
    const {messages, loading}= useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
        }, 300);
    },[messages]);

    return (
        <div className="mt-4 ml-6 mx-4 flex-1 overflow-auto">
            {!loading && messages.map((message)=>(
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}

            {loading && [...Array(3).map((_, idx)=><MessageSkeleton key={idx}/>)]}
        </div>
    );
}

export default Messages;