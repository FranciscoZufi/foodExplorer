import {Routes, Route } from 'react-router-dom'



import { MyRequests } from '../pages/MyRequests'
import { Home } from '../pages/Home'
import { HomeAdmin } from '../pages/HomeAdmin'
import { MyFavorites } from '../pages/MyFavorites'
import { OrderHistory } from '../pages/OrderHistory'
import { Plate } from '../pages/Plate'
import { PlateAdmin } from '../pages/PlateAdmin'
import { EditPlate } from '../pages/EditPlate'


export function AppRoutes(){
  return (
    <Routes>
      <Route path="/myRequests" element={<MyRequests/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/homeAdmin" element={<HomeAdmin/>}/>
      <Route path="/myFavorites" element={<MyFavorites/>}/>
      <Route path="/orderHistory" element={<OrderHistory/>}/>
      <Route path="/plate" element={<Plate/>}/>
      <Route path="/plateAdmin" element={<PlateAdmin/>}/>
      <Route path="/editPlate" element={<EditPlate/>}/>
    </Routes>
  )
}