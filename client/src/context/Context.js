import { Children, createContext } from "react";
import { useState, useCallback, useEffect } from "react"

const storageName = 'userData'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);


    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)
        
        console.log(jwtToken, id)

        localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwtToken}))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        
        if (data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])

    const value = {login, logout, userId, token}

    return (<AuthContext.Provider value = {value}>{children}</AuthContext.Provider>)
}

export default AuthContextProvider