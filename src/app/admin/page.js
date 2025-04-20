"use client"
import React from 'react'
import Login from './login'

const Page = () => {
    const [ip, setIp] = React.useState('')
    const [admins, setAdmins] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {setIp(data.ip)})
            .catch(error => console.error('Error fetching IP:', error));
    }, []);

    React.useEffect(() => {
        fetch('/api/admins')
            .then(response => response.json())
            .then(data => {
                setAdmins(data)
                console.log('admins', data)
            })
            .catch(error => console.error('Error fetching admins:', error));
    }, []);

    return (
        <div className='flex justify-center items-center h-screen'>
            {admins && admins.ip === ip ? <Login /> : <div>Your ip is not allowed</div>}
        </div>
    )
}

export default Page