import React from 'react'
import logo from '../Assets/log.padel.jpg'
const Score = () => {
 return (

  <div>

   <div className='container'>
    <img src={logo} style={{ width: '150px' }} />
    <h1>00:00</h1>
    <h2>CANCHA: 5</h2>
   </div>
   
    <div className='marcador'>
     <div className='one-marcador'>
      <h1>15</h1>
      <h1>45</h1>
     </div>
   </div>
  </div>
 )
}

export default Score