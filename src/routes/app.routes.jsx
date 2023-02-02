import {Routes, Route } from 'react-router-dom'



import { HomeAdmin } from '../pages/HomeAdmin'


export function AppRoutes(){
  return (
    <Routes>
      <Route path="/homeAdmin" element={<HomeAdmin/>}/>
    </Routes>
  )
}