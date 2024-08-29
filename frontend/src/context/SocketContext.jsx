import { useContext, createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () =>{
    return useContext(SocketContext);
}

export const useSocket = () => {
    const { socket } = useSocketContext();
    return socket;
  };


export  const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser){
            const socket = io("cycure-10-production.up.railway.app");

            setSocket(socket);

            return () => socket.close()
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser])

    return <SocketContext.Provider value={{socket}}>{children}</SocketContext.Provider>
}