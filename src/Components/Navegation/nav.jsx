import React from 'react'
import logoPadel from '../../Assets/OriginalLogo.png'
const Nav = () => {
  return (
   <div className='container-header'>
    <ul className='ul-header'>
    <img src={logoPadel} className='fond-padel'/>  
    <div className='contenedor'>
      <li>About</li>
      <li>Home</li>
      <li>Games</li>
      <li>Record</li>
      <li>Contacto</li>
    </div>
    </ul>
   </div>
  )
}

export default Nav