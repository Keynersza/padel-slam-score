import React from 'react';
import logo from '../Assets/BlancoLogo.png';

const Score = () => {
  return (
    <div>
      <header>
        <div className="container">
          <img src={logo} style={{ width: '150px' }} />
          <h1>00:00</h1>
          <h2>CANCHA:</h2>
          <p>5</p>
        </div>
      </header>


      <div className="marcador">
        <div className="one-marcador">
          <h1 className='marcador-izquierdo'>15</h1>
          <h1 className='marcador-derecho'>40</h1>
        </div>
      </div>


        <div className='hola'>
          <div className='names-one'>
            <h2>JESUS SANCHEZ</h2>
            <h2 className='player-two'>JULIO YEPEZ</h2>
          </div>
          <div className='names-two'>
            <h2 className='player-three'>JOANGEL REYES</h2>
            <h2>KENNY SALAZAR</h2>
          </div>
        </div>

      <div className='container-category'>
        <h2>Category: </h2>
        <h3>6</h3>
        <p>ta</p>
      </div>


    </div>
  );
};

export default Score;
