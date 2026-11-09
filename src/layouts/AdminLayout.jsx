import React from 'react'
import { Route, Routes } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
      <Routes>
        <Route index element={<Home></Home>}/>
      </Routes>
    </div>
  )
}

export default AdminLayout