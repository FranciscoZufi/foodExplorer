import {Routes, Route } from 'react-router-dom'



import { MyRequests } from '../pages/MyRequests'


export function AppRoutes(){
  return (
    <Routes>
      <Route path="/myRequests" element={<MyRequests/>}/>
    </Routes>
  )
}