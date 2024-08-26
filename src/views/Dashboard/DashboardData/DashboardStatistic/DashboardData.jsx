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
               <div className="dashboard-data-text">
                <h2>Balance</h2>
                <h1>$2190.19</h1>
               </div>
            </div>
            <div className="dashboard-data-card">
                <FaHandHoldingUsd className='data-icons' />
               <div className="dashboard-data-text">
                <h2>Income</h2>
                <h1>$2190.19</h1>
               </div>
            </div>
            <div className="dashboard-data-card">
                <MdSavings className='data-icons' />
               <div className="dashboard-data-text">
                <h2>Savings</h2>
                <h1>$2190.19</h1>
               </div>
            </div>
            <div className="dashboard-data-card">
                <BsDatabaseFillDown className='data-icons' />
               <div className="dashboard-data-text">
                <h2>Expenses</h2>
                <h1>$2190.19</h1>
               </div>
            </div>
            
        </div>
    )
}

export default DashboardData