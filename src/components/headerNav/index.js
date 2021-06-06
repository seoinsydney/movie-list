import React, { useState } from 'react'
import Search from '../searchBar'
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import './index.scss';


function Header () {

    return (
        <header className="topNav">
            <ul>
                <li><Link to="/" ><img src={Logo} alt="Avocado Logo" /></Link></li>
                {/* <li><Link to="/mylist" >My List</Link></li> */}
            </ul>
        </header>
    )
}

export default Header
