import React, { useState } from 'react'
import Search from './searchNew'
import { Link } from "react-router-dom";



const Header = () => {



    return (
        <>
                    <h1>Movie-list App</h1>
        <header>

            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/mylist" >My List</Link></li>
                <img src="" alt="" />
                <img src="" alt="" />
            </ul>
            <Search /> 
        </header>
        </>
    )
}

export default Header
