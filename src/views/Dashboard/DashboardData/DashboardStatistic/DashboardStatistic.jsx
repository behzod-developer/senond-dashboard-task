import React from 'react'
import DashboardData from './DashboardData'
import DashboardCharts from './DashboardCharts'
import DashboardUser from './DashboardUser'
import './DashboardStatistic.css'

function DashboardStatistic() {
  return (
    <div className='dashboard-statistic-container'>
        <DashboardData />
        <DashboardCharts />
        <DashboardUser />
    </div>
  )
}

export default DashboardStatistic