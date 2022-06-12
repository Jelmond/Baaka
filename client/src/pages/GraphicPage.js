import React from 'react'
import {NavLink} from "react-router-dom"

const GraphicPage = () => {
    
 
    return (
        <div className="card">
            <div className="card-header">
                
            </div>
            <div className="card-content">
                <h3>Frank the Pug</h3>
                <h4>The sexiest "Men (dog) in Black" </h4>
                <p>And now you're back from outer space, / I just walked in to find you here with that sad look upon your face, / I should've changed that stupid lock, I should have made you leave your key, / If I'd have known for just one second you'd be back to bother me. / Go on, now go! Walk out the door...</p>
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

export default GraphicPage