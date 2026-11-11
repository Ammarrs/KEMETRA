import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Admin/Dashboard'
import AdminNavbar from './../components/AdminNavbar';

function AdminLayout() {
  return (
    <div className='flex'>
      <AdminNavbar/>
      <Dashboard/>
    </div>
  )
}

export default AdminLayout