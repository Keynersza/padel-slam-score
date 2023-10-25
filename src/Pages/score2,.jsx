import React from 'react'
import lineaSup from '../Assets/linea-masLarga.png'
import lineaInf from '../Assets/Linea-inferior.png'
import logo from '../Assets/BlancoLogo.png'
const Score2 = () => {
  return (
    <>
        <header className='header'>
            <div className='container'>
                <div className='name-one'>
                    <h2>JESUS / JOANGEL</h2>
                </div>
                <div className='name-two'>
                    <h2>JULIO / KENNY</h2>
                </div>
                <img src={lineaSup} className='line-score'/>

                <div className='sets-partida'>
                <h1 className='sets-left'>2</h1>
                <h1 className='sets-righ'>0</h1>
                </div>

                <div className='numbers'>
                    <h2 className='num-left'>5</h2>
                    <h2 className='num-right'>3</h2>
                </div>
            </div>
        </header>
     <div>
        <div>
            <img src={lineaInf} className='line-inf' />
        </div>
        <div className='puntos'>
            <h1 className='punto-iz'>15</h1>
            <h1 className='punto-ez'>40</h1>
        </div>
        <img src={logo} className='logo' />
     </div>
    </>
  )
}

export default Score2