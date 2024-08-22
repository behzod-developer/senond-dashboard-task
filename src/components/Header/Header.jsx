import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import './Header.css'

function Header() {
    return (
        <header>
            <li className='header-title'>
                Dashboard
            </li>
            <ul>
                <li>
                    <div className="header-search">
                        <CiSearch />
                        <input type="text" />
                    </div>
                </li>
                <li><AiFillMessage className='header-icon' /></li>
                <li><IoIosNotifications className='header-icon' /></li>
                <li className='user-image'>
                    <img src="https://coderthemes.com/adminto/layouts/assets/images/users/user-1.jpg" alt="" />
                </li>
            </ul>
        </header>
    )
}

export default Header