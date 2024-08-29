import useLogout from "../../hooks/logout";
import SideBar from "../SideBar"

const SetScreen = () => {
    
    const {loading, logout} = useLogout();
    return(
        <div className="learn-beckground p-3 gap-3 h-screen w-screen flex overflow-hidden">
            <SideBar/>
            <div className="flex flex-col w-full bg-[#1a00c5]  rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15">
                <div>
                    {!loading ? (<button className="btn w-1/4 btn-sm mx-3 my-3 btn-primary"
                    onClick={logout}
                    >LogOut</button>) : (<span className="loading loading-spinner"></span>)}
                </div>
            </div>
        </div>
    )
}

export default SetScreen;