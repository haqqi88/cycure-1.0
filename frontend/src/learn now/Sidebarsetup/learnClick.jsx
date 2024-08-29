import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LearnOn from "../../assets/Learn.png";
import LearnOff from "../../assets/LearnOff.png";

const LearnClick = () => {
    const navigate = useNavigate();
    const [isLearn, setIsLearn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLearn(location.pathname.startsWith("/Learn"))
      }, [location.pathname])

    const handleClick = () => {
        if(isLearn){
            navigate("/Learn")
        }else{
            navigate("/Learn")
        }
        setIsLearn(!isLearn);
    }

    return(
        <div className="grid justify-items-center p-3 pb-5">
            <button onClick={handleClick}>{isLearn ? <img src={LearnOn}/> : <img src={LearnOff}/>}</button>
            <h1 className={`poppins-semibold text-sm ${isLearn ? "text-white" : "text-gray-400"}`}>Learn</h1>
        </div>
    )
}

export default LearnClick;