import React, { useEffect, useState } from 'react'
import './DashboardStatistic.css'
import axios from 'axios'

function DashboardUser() {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        async function fetchUserData() {
            try {
                const res = await axios.get('https://fakestoreapi.com/users')
                setUserData(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchUserData()
    }, [])

    return (
        <div className="dashboard-user">
            <table>
                <tbody>
                    {userData.map((item) => (
                        <tr>
                            <td><img src="" alt="Img" /></td>
                            <td>{item.username}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardUser