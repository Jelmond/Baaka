import { Children, createContext } from "react";
import { useState, useCallback, useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { authenticationStatus, authentication } from "../app/IsAuthenticatedAction";

const storageName = 'userData'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const authStatus = useSelector(authenticationStatus)
    const dispatch = useDispatch()

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);


    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        dispatch(authentication())
    

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