import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LinksPage from "./pages/LinksPage"
import AuthPage from "./pages/AuthPage"
import {useAuth} from './hooks/auth.hook'
import 'materialize-css'
import { AuthContext } from './context/AuthContext'

function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  return (
    <AuthContext.Provider value={{
        token, login, logout, userId, isAuthenticated}}>
        <div className = 'container'>
            <BrowserRouter>
                    <Routes>
                        <Route path="/links" exact element={<LinksPage/>}/>
                        <Route path = "/" exact element={<AuthPage />}/>
                    </Routes>
                </BrowserRouter>
        </div>
    </AuthContext.Provider>
  );
}

export default App;
