import {Routes, Route } from 'react-router-dom'



import { MyRequests } from '../pages/MyRequests'
import { Home } from '../pages/Home'
import { HomeAdmin } from '../pages/HomeAdmin'
import { MyFavorites } from '../pages/MyFavorites'
import { OrderHistory } from '../pages/OrderHistory'
import { Plate } from '../pages/Plate'
import { PlateAdmin } from '../pages/PlateAdmin'
import { EditPlate } from '../pages/EditPlate'
import { NewPlate } from '../pages/NewPlate'
import { useAuth } from '../hooks/auth'


export const  AppRoutes = () => {
  const {user} = useAuth()
  const handleRoutes = () => {
    if(user.admin === 1){
      return (
    <Routes>
      <Route path="/" index element={<HomeAdmin/>}/>
      <Route path="/plateAdmin" element={<PlateAdmin/>}/>
      <Route path="/editPlate" element={<EditPlate/>}/>
      <Route path="/newPlate" element={<NewPlate/>}/>
    </Routes>
  )
    } else{
      <Routes>
      <Route path="/" index element={<Home/>}/>
      <Route path="/myRequests" element={<MyRequests/>}/>
      <Route path="/myFavorites" element={<MyFavorites/>}/>
      <Route path="/orderHistory" element={<OrderHistory/>}/>
      <Route path="/plate" element={<Plate/>}/>
    </Routes>
    }
}
return(
  handleRoutes()
)
}
