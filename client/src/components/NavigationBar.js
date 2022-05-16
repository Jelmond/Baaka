import React, { useContext } from "react";
import {NavLink, unstable_HistoryRouter} from "react-router-dom"
import { AuthContext } from "../context/Context";
import {useDispatch, useSelector} from 'react-redux'
import { authenticationStatus, deauthentification } from '../app/IsAuthenticatedAction'


const Navbar = () => {
    const auth = useContext(AuthContext)

    const authStatus = useSelector(authenticationStatus)
    const dispatch = useDispatch()

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        dispatch(deauthentification())
        console.log(authStatus)
    }

  return(  
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to='/create'>Sass</NavLink></li>
                <li><NavLink to='/links'>Sass</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>JavaScript</a></li>
            </ul>
        </div>
    </nav>
)}

export default Navbar