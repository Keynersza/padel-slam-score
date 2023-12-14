import React from 'react'
import logoPadel from '../../Assets/OriginalLogo.png'
const Nav = ({open}) => {
  return (
   <div className='container-header'>
    <ul className='ul-header'>
    <img src={logoPadel} className='fond-padel'/>  
    
    <div  className= {open ? 'contenedor-open flex-on' : 'contenedor flex-off'}>
      <li>About</li>
      <li>Home</li>
      <li>Games</li>
      <li>Record</li>
      <li>Contacto</li>
      <div className='contenedor-login'>
        <li>Sign In</li>
        <li>Sign Up</li>
      </div>
    </div>
   
    </ul>
   </div>
  )
}

export default Nav