import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'
import { LearnContextProvider } from './context/LearnContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <LearnContextProvider>
            <App/>
          </LearnContextProvider>
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    <Toaster/>
  </React.StrictMode>,
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthContextProvider>
//         <SocketContextProvider>
//           <LearnContextProvider>
//             <App/>
//           </LearnContextProvider>
//         </SocketContextProvider>
//       </AuthContextProvider>
//     </BrowserRouter>
//     <Toaster/>
//   </React.StrictMode>,
// )
