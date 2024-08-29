import { useEffect, useState } from "react";
import Setting from "../../assets/Setting.png"
import SettingOff from "../../assets/SettingOff.png"
import { useLocation, useNavigate } from "react-router-dom";

const SetClick = () => {
    const navigate = useNavigate();
    const [isSetting, setIsSetting] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsSetting(location.pathname === "/setting")
    }, [location.pathname])

    const handleClick = () => {
        if (isSetting) {
            navigate("/setting"); // Navigate back
        } else {
            navigate("/setting"); // Navigate to settings
        }
        setIsSetting(!isSetting); // Toggle state
    };

    return(
        <div className="grid justify-items-center p-3 pb-5">
            <button onClick={handleClick}>{isSetting ? <img src={Setting}/> : <img src={SettingOff}/>}</button>
        </div>
    )
}

export default SetClick;