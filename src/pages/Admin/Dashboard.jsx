import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Overview from './Overview';
import Stories from './Stories';
import Places from './Places';
import Timeline from './Timeline';
import AudioRecords from './AudioRecords';
import Experiences from './Experiences';
import AdminSettings from './AdminSettings';

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path='admin-overview' element={<Overview/>}/>
        <Route path='admin-stories' element={<Stories/>}/>
        <Route path='admin-places' element={<Places/>}/>
        <Route path='admin-timeline' element={<Timeline/>}/>
        <Route path='admin-audio' element={<AudioRecords/>}/>
        <Route path='admin-3d' element={<Experiences/>}/>
        <Route path='admin-settings' element={<AdminSettings/>}/>
      </Routes>
    </div>
  )
}

export default Dashboard