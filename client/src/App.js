// import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import LinksPage from "./pages/LinksPage"
// import AuthPage from "./pages/AuthPage"
// import {useAuth} from './hooks/auth.hook'
// import 'materialize-css'
// import { AuthContext } from './context/AuthContext'

// function App() {
//   const {token, login, logout, userId} = useAuth()
//   const isAuthenticated = !!token
//   return (
//     <AuthContext.Provider value={{
//         token, login, logout, userId, isAuthenticated}}>
//         <div className = 'container'>
//             <BrowserRouter>
//                     <Routes>
//                         <Route path="/links" exact element={<LinksPage/>}/>
//                         <Route path = "/" exact element={<AuthPage />}/>
//                     </Routes>
//                 </BrowserRouter>
//         </div>
//     </AuthContext.Provider>
//   );
// }

// export default App;





import React, { useContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigate } from "react-router-dom"
import LinksPage from "./pages/LinksPage"
import AuthPage from "./pages/AuthPage"
import Navbar from './components/NavigationBar'
import 'materialize-css'
import { AuthContext } from './context/Context'
import AuthContextProvider from './context/Context'
import { authenticationStatus} from "./app/IsAuthenticatedAction";
import {useSelector} from 'react-redux'





function App() {
  
  const isAuthenticated = useSelector(authenticationStatus)
  // console.log(isAuthenticated)

  return (
    <AuthContextProvider> 
        <div className = 'container'>
            <BrowserRouter>
                    {<Navbar/>}
                    <Routes>
                        <Route path="/links" exact element={<LinksPage/>}/>
                        <Route path = "/" exact element={isAuthenticated ? <Navigate to ="/links" replace/> : <AuthPage />}/>
                    </Routes>
                </BrowserRouter>
        </div>
    </AuthContextProvider>
  );
}

export default App;