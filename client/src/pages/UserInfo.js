import React from 'react'
import {NavLink} from "react-router-dom"

const UserInfo = () => {
    // Navlink.to заменить на /userInfo
 
    return (
        <div className="card">
            <div className="card-header">
                
            </div>
            <div className="card-content">
                <h3>Frank the Pug</h3>
                <h4>The sexiest "Men (dog) in Black" </h4>
                <p>There's no Jack</p>
            </div>
            <div className="card-footer">
                <ul>
                <li>
                    <NavLink to='/userPage'>UserPage</NavLink> 
                </li>
                <li>
                    <NavLink to='/userInfo'>UserInfo</NavLink>
                </li>
                <li>
                    <a href="#"><i className="fa fa-github"></i></a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default UserInfo