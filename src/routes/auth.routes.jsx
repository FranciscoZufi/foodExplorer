import {Routes, Route } from 'react-router-dom'


import { SingIn } from '../pages/SingIn'
import { SingTest } from '../pages/Test'
import { SingUp } from '../pages/SingUp'


export function AuthRoutes(){
  return (
    <Routes>
      <Route path="/test" element={<SingTest/>}/>
      <Route path="/" element={<SingIn/>}/>
      <Route path="/register" element={<SingUp/>}/>
    </Routes>
  )
}