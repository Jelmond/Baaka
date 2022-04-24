import React from 'react'
import 'materialize-css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LinksPage from "./pages/LinksPage"
import AuthPage from "./pages/AuthPage"

function App() {
  return (
      <div className = 'container'>
         <BrowserRouter>
                <Routes>
                    <Route path="/links" exact element={<LinksPage/>}/>
                    <Route path = "/" exact element={<AuthPage />}/>
                </Routes>
            </BrowserRouter>
      </div>
  );
}

export default App;
