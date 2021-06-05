import React from 'react'
import {Link, withRouter } from "react-router-dom";


const Index = () => {
    return (
        <header>
            <ul>
                <li><Link to="/" >Home</Link></li>
                {/* <li><Link to="/moviedetails" >movie details</Link></li> */}
                <li><Link to="/mylist" >My List</Link></li>
            </ul>
        </header>
    )
}

export default Index
