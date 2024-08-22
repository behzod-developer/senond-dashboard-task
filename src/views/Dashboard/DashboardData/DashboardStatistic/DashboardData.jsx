import React from 'react'
import './DashboardStatistic.css'
import { FaWallet } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { MdSavings } from "react-icons/md";
import { BsDatabaseFillDown } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";


function DashboardData() {
    return (
        <div className='dashboard-data-container'>
            <div className="dashboard-data-card dashboard-data-active">
                <FaWallet className='data-icons' />
                <h2>Balance</h2>
                <HiDotsVertical className='dots' />
                <h1>$2190.19</h1>
            </div>
            <div className="dashboard-data-card">
                <FaHandHoldingUsd className='data-icons' />
                <h2>Income</h2>
                <HiDotsVertical className='dots' />
                <h1>$2190.19</h1>
            </div>
            <div className="dashboard-data-card">
                <MdSavings className='data-icons' />
                <h2>Savings</h2>
                <HiDotsVertical className='dots' />
                <h1>$2190.19</h1>
            </div>
            <div className="dashboard-data-card">
                <BsDatabaseFillDown className='data-icons' />
                <h2>Expenses</h2>
                <HiDotsVertical className='dots' />
                <h1>$2190.19</h1>
            </div>
            
        </div>
    )
}

export default DashboardData