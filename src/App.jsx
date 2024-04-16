import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile' 

import Signout from '../pages/Signout'
import SignInPage from '../pages/SignInPage'
import Header from './components/Header'

export default function Signin() {
  return ( 
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/signinpage' element={<SignInPage/>}/>
    <Route path='/signout' element={<Signout/>}/>


  </Routes>
  </BrowserRouter>
  )
}