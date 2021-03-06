import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigate } from "react-router-dom"
import LinksPage from "./pages/LinksPage"
import UserPage from './pages/UserPage'
import AuthPage from "./pages/AuthPage"
import Navbar from './components/NavigationBar'
import AuthContextProvider from './context/Context'
import { authenticationStatus} from "./app/IsAuthenticatedAction";
import {useSelector} from 'react-redux'
import './pages/UserPageI.css'
import UserInfo from './pages/UserInfo'
import GraphicPage from './pages/GraphicPage'
import './pages/GraphicPage.css'
import Account_page from './pages/AccountPage'
import MainWaindow from './pages/MainWindow'





function App() {
  
  const isAuthenticated = useSelector(authenticationStatus)
  // console.log(isAuthenticated)

  async function getCurrencyEuro() {
    const app = await fetch(`https://www.nbrb.by/api/exrates/rates/EUR?parammode=2`, {
        method: 'GET',
    })
    .then((response) => {
    return response.json()
    })
    .then((data) => {
        console.log(data.Cur_OfficialRate)
        console.log(data);
        console.log(data.Cur_Name)
    })
}


getCurrencyEuro()

  return (
    <AuthContextProvider> 
        <div className = 'Nav-bar-width'>
            <BrowserRouter>
                    {/* {<Navbar/>} */}
                    <Routes>
                      <Route path='/IBAN_acc_page' exact element={<Account_page/>}></Route>
                        <Route path='/graphicPage' exact element={<GraphicPage/>}></Route>
                        <Route path='userInfo' exact element={<UserInfo/>}></Route>
                        <Route path="/userPage" exact element={<UserPage/>}></Route>
                        <Route path="/links" exact element={<LinksPage/>}/>
                        <Route path="/" exact element={<MainWaindow/>}></Route>
                        <Route path="/registration" exact element={<AuthPage/>}></Route>
                        {/* <Route path = "/" exact element={isAuthenticated ? <Navigate to ="/links" replace/> : <AuthPage />}/> */}
                    </Routes>
                </BrowserRouter>
        </div>
    </AuthContextProvider>
  );
}

export default App;