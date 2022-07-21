import React, { useContext } from "react";
import { AuthContext } from "../context/Context";
import {useDispatch, useSelector} from 'react-redux'
import { authenticationStatus, deauthentification } from '../app/IsAuthenticatedAction'
import { NavLink } from "react-router-dom";
import './Dropdown.css'


export const DropdownMenu = (props) => {


    const auth = useContext(AuthContext)

    const authStatus = useSelector(authenticationStatus)
    const dispatch = useDispatch()

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        dispatch(deauthentification())
        console.log(authStatus)
    }


    return (
        <div className="Dropdown" >
            <p><NavLink to='IBAN_acc_page'>Create an account</NavLink></p>
            <p onClick={logoutHandler}>logout</p>
        </div>
  );
};
