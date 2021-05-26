import React from 'react'
import queryString from 'query-string'
import {Link, withRouter, useLocation } from "react-router-dom";


function Index() {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('id');


    return (
        <div>
            <h1>Moview details</h1>
            <p>{name}</p>
        </div>
    )
}

export default withRouter(Index)
