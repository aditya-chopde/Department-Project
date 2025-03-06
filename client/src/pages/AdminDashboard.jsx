import React from 'react'
import Navbar from '../components/admin_dashboard/Navbar'

const AdminDashboard = () => {
  return (
    <div>
      <Navbar/>
      <div className='text-center mt-12 mb-5'>
        <h1 className='text-bold text-2xl'>Welcome Admin, </h1>
      </div>
    </div>
  )
}

export default AdminDashboard
