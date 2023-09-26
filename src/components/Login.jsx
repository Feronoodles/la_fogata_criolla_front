import React from 'react'

export const Login = () => {
  return (
    <>
    <div className='login_form'>
        <div className='items_form'>
        <label >Correo</label>
        <br />
        <input type="text" id="Correo" name="Correo" />
        <br />
        <label >Contraseña</label>
        <br />
        <input type="password" id="Password" name="Password" />
        <br />
        <input className='button_login' type="button" id="button_ingresar" name="Ingresar" />
        
        
        </div>
    </div>
    </>
  )
}
