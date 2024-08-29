import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import LogIn from "./auth/login/LogIn";
import SignUp from "./auth/SignUp/SignUp";
import { useAuthContext } from "./context/AuthContext";
import SetScreen from "./learn now/SetScreen/setingscr";
import Discuss from "./learn now/discuss/discuss";
import Learn from "./learn now/learn/learn";


function App() {
    const {authUser} = useAuthContext();
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Learn/:ch' element={!authUser? <Navigate to='/Login/' /> : <Learn/>}/>
                <Route path='/Learn' element={!authUser? <Navigate to='/Login/' /> : <Learn/>}/>
                <Route path='/Login' element={authUser ? <Navigate to='/Learn' /> : <LogIn />}/>
                <Route path='/Signup' element={authUser ? <Navigate to='/Learn' /> : <SignUp />}/>
                <Route path='/setting' element={<SetScreen/>}/>
                <Route path='/discuss' element={<Discuss/>}/>
            </Routes>
        </div>
    );
}

export default App;