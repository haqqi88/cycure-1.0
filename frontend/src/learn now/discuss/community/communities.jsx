import useGetConversations from "../../../hooks/useGetConversation";
import Community from "./community";

const Communities = () => {
    const {loading, conversations} = useGetConversations();

    console.log(conversations)
    
    return(
    <div className="flex flex-col w-1/5 items-center bg-[#4e37e7] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
        <div className="py-5 px-6 w-full flex flex-col items-center">
            <h1 className="pb-2 poppins-medium text-lg text-white">Ruang Diskusi</h1>
            <div className="p-px bg-gray-200 w-full"></div>
        </div>
        {conversations.map((conversation) => (
                <Community key={conversation._id} community={conversation} />
            ))}

        {loading ? <span className=" loading loading-spinner mx-auto"></span> : null}
    </div>
    )
}

export default Communities;