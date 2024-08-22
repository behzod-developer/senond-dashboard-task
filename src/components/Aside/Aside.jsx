import React from 'react'
import { GrAppsRounded } from "react-icons/gr";
import { FaWallet } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoExit } from "react-icons/io5";
import './Aside.css'


function Aside() {
    return (
        <div className='aside'>
            <div className="logo">
                <img src="" alt="Logo" />
            </div>
            <aside>
                <ul className='aside-list'>
                    <li className='active'><GrAppsRounded /></li>
                    <li><FaWallet /></li>
                    <li><FaExchangeAlt /></li>
                    <li><FaFile /></li>
                    <li><FaRegChartBar /></li>
                </ul>
                <ul className='aside-list'>
                    <li><IoMdSettings /></li>
                    <li><IoExit /></li>
                </ul>
            </aside>
        </div>
    )
}

export default Aside