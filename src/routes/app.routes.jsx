import {Routes, Route } from 'react-router-dom'



import { Plate } from '../pages/plate'


export function AppRoutes(){
  return (
    <Routes>
      <Route path="/plate" element={<Plate/>}/>
    </Routes>
  )
}