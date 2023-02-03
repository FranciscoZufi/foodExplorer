import {Routes, Route } from 'react-router-dom'



import { MyFavorites } from '../pages/MyFavorites'


export function AppRoutes(){
  return (
    <Routes>
      <Route path="/myFavorites" element={<MyFavorites/>}/>
    </Routes>
  )
}