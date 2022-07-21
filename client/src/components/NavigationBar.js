
import {NavLink, unstable_HistoryRouter} from "react-router-dom"
import UserPage from "../pages/UserPage";
import { Dropdown } from "./Dropdown";


const Navbar = (props) => {

  return(  
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to='/graphicPage'>Graphic</NavLink></li>
                <li><NavLink to='/userPage'>User</NavLink></li>
                <li><NavLink to='/links'>Sass</NavLink></li>
                <li><Dropdown></Dropdown></li>
            </ul>
        </div>
    </nav>
)}

export default Navbar

//<a href="/" onClick={logoutHandler}>Logout</a>