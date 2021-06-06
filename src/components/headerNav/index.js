import React, { useState } from 'react'
import Search from './searchNew'
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import { SearchOutlined } from '@ant-design/icons';
import './index.scss';
import { Input } from 'antd';

function Header () {

    return (
        <header className="topNav">
            <ul>
                <li><Link to="/" ><img src={Logo} alt="Avocado Logo" /></Link></li>
                {/* <li><Link to="/mylist" >My List</Link></li> */}
            </ul>

            <div>

                {/* <SearchOutlined />
                <Search />  */}
                {/* <Input placeholder=" search.." /> */}
            </div>
        </header>
    )
}

export default Header
