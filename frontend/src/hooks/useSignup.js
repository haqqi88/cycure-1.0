import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLearnContext } from "../context/LearnContext";

const useSignup = () => {
    const [loading,setLoading] = useState(false);
    const {authUser, setAuthUser} = useAuthContext();
    const {isNewUser, setIsNewUser} = useAuthContext();
    const {progress, setProgress} = useLearnContext();
    const {progress2, setProgress2} = useLearnContext();
    const {progress3, setProgress3} = useLearnContext();
    const {chapter, setChapter} = useLearnContext();
    const navigate = useNavigate();

    const signup =  async({username,password,confirmPassword,gender}) => {
        const success = handleInputErrors({username, password, confirmPassword, gender})
        if(!success) return;

        setLoading(true);
        try{
            const res = await fetch("/api/auth/signup",{
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({username,password,confirmPassword,gender})
            });

            const data = await res.json();
            if (data.error){
                console.log(data.error);
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            localStorage.setItem("isNewUser", JSON.stringify(true));
            localStorage.setItem("progress", JSON.stringify(progress === 0));
            localStorage.setItem("progress2", JSON.stringify(progress2 === 0));
            localStorage.setItem("progress3", JSON.stringify(progress3 === 0));
            localStorage.setItem("chapter", JSON.stringify(chapter === 1));
            setAuthUser(data);
            setIsNewUser(true);
            setProgress(progress === 0);
            setProgress2(progress2 === 0);
            setProgress3(progress3 === 0);
            setChapter(chapter === 1);


        }catch (error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        };
    }

    return { loading, signup}
}

export default useSignup;

function handleInputErrors({username, password, confirmPassword, gender}){

    if (!username || !password || !confirmPassword || !gender){
        toast.error('Harap isi semua bidang dengan benar')
        return false;
    }

    if (password !== confirmPassword){
        toast.error('Password tidak sama')
        return false;
    }

    return true;
}