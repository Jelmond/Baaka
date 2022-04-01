import React from "react"
import { LinksPage } from "./pages/LinksPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {AuthPage} from "./pages/AuthPage"

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/links" exact>
                        <LinksPage/>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }

        return(
            <BrowserRouter>
                <Routes>
                    <Route path = "/" exact element={<AuthPage />}/>
                </Routes>
            </BrowserRouter>
    )
}