import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DiscussOn from "../../assets/discuss.png";
import DiscussOff from "../../assets/discussOff.png";

const DiscussClick = () => {
    const navigate = useNavigate();
    const [isDiscuss, setIsDiscuss] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsDiscuss(location.pathname === "/discuss")
    }, [location.pathname])

    const handleClick = () => {
        if(isDiscuss){
            navigate("/discuss")
        }else{
            navigate("/discuss")
        }
        setIsDiscuss(!isDiscuss);
    }

    return(
        <div className="grid justify-items-center p-3 pb-5">
            <button onClick={handleClick}>{isDiscuss ? <img src={DiscussOn}/> : <img src={DiscussOff}/>}</button>
            <h1 className={`poppins-semibold text-sm ${isDiscuss ? "text-white" : "text-gray-400"}`}>Discuss</h1>
        </div>
    )
}

export default DiscussClick;