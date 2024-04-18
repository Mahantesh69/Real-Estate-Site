import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import SignInPage from '../pages/SignInPage'
import Signout from '../pages/Signout'
import Headline from './components/Headline'

export default function App() {
  return (
    <BrowserRouter>
   <Headline/>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/signout' element={<Signout/>}/>
      <Route path='/signin' element={<SignInPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

