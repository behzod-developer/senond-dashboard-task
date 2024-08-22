import React from 'react'
import './DashboardStatistic.css'
import LineChart from '../../../../container/LineChart/DashboardLineChart'
import DoughnutChart from '../../../../container/PieChart/DashboardPieChart'

function DashboardCharts() {
    return (
        <div className='dashboard-charts'>
            <div className="dashboard-line-chart">
                <select className='charts' name="" id="">
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
                <LineChart />
            </div>
            <div className="dashboard-pie-chart">
                <DoughnutChart />
            </div>
        </div>
    )
}

export default DashboardCharts