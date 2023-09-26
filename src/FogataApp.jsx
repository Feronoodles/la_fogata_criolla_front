import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Slider } from './components/Slider'
import { Login } from './components/Login';

export const FogataApp = () => {

  const [navState, setnavState] = useState(); 
  return (
    <>
    <Navbar></Navbar>
    <Login></Login>
    
    </>
    
  )
}
