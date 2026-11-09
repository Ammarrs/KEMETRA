import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from './../pages/About';

function UserLayout() {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default UserLayout