import React from 'react'
import {Link, withRouter } from "react-router-dom";
import './index.scss';


function Index() {
    return (
        <div>
            <h1>My Movie List</h1>
        </div>
    )
}

export default withRouter(Index)
