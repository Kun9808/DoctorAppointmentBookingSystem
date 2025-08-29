import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
import MyAppointments from './Pages/MyAppointments'
import Doctors from './Pages/Doctors'
import About from './Pages/About'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar />
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/login' element={<Login/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/MyProfile' element={<MyProfile/>} />
<Route path='/MyAppointments' element={<MyAppointments/>} />
<Route path='/doctors' element={<Doctors/>} />
<Route path='/about' element={<About/>} />
<Route path='/appointment' element={<Appointment/>} />
</Routes>
    </div>
  )
}

export default App

