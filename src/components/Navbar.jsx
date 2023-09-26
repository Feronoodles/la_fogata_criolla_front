import React from 'react'
import reactLogo from '../assets/logo_color.jpg'
export const Navbar = () => {
  return (
    <>
    <div className='logo'>
      <img src={reactLogo} alt="Logo" 
       
      />
    </div>
    <ul className='lista'>
        <li><div className='cabecera'><a href='#reserva'>Reservación</a></div> </li>
        <li><div className='cabecera'><a href='#contactos'>Contactos</a></div></li>
        <li><div className='cabecera'><a href='#carta'>Carta</a></div></li>
        <li><div className='cabecera'><a href='#faq'>FAQ</a></div></li>
    </ul>
    </>
    
  )
}
