import React from 'react'
import Navbar from '../components/admin_dashboard/Navbar'
import RequestPosts from '../components/admin_dashboard/RequestPosts'

const AdminDashboard = () => {
  return (
    <div>
      <Navbar/>
      <div className='text-center mt-18 mb-5'>
        <h1 className='text-bold text-2xl'>Welcome Admin, </h1>
      </div>
    </div>
  )
}

export default AdminDashboard
