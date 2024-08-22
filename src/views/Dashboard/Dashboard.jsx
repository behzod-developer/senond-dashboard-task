import React from 'react'
import './Dashboard.css'
import Aside from '../../components/Aside/Aside'
import Header from '../../components/Header/Header'
import DashboardStatistic from './DashboardData/DashboardStatistic/DashboardStatistic'
import DashboardAddInformation from './DashboardData/DashboardAddInformation/DashboardAddInformation'

function Dashboard() {
    return (
        <div className='dashboard'>
            <Aside />
            <div className='dashboard-container'>
                <Header />
                <div className="dashboard-parent">
                    <div className="dashboard-statistic">
                        <DashboardStatistic />
                    </div>
                    <div className="dashboard-add-information">
                        <DashboardAddInformation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard