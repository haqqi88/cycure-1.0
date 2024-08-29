import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}


export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    const [isNewUser, setIsNewUser] = useState(JSON.parse(localStorage.getItem("isNewUser")) || false);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, isNewUser, setIsNewUser }}>
            { children }
        </AuthContext.Provider>
    );
}