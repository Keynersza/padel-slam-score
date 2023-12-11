import React, { useState } from 'react'
import BotonControllers from '../Controllers/bottonController'
import Score2 from '../Pages/score2,'

const BotonesScore = () => {
    const {sumarPunt, restarPunt, sumarGroups1, sumarTopScore, sumarBotScore, sumarBut, sumarGroups2, restarGroups2} = BotonControllers()
    if (sumarGroups1) {
        localStorage.setItem("puntos", sumarGroups1)
       
      }else{
         localStorage.setItem("puntos", 0)
         
    }
   


    if (sumarGroups2) {
      localStorage.setItem("puntosGruops2", sumarBut)
    }
  return (
  <div >

    <div className='container-box-pts-score'>
      <div className='box-pt-st'>
        <p>Puntos</p>
        <p>Sets</p>
      </div>
      <h1>
        Equipo 1
      </h1>
      <div className='box-botton-pts'>
        <button onClick={() => sumarPunt()} >+</button>
       <h2  className='color-pts-but'>{sumarGroups1}</h2>
       <h2 className='color-set-but'>{sumarTopScore}</h2>
        <button onClick={()=> restarPunt()} >-</button>
      </div>
    </div>
    <div className='container-box-pts-score'>
    <div className='box-pt-st-bot'>
        <p >Puntos</p>
        <p >Sets</p>
      </div>
      <h1>
        Equipo 2
      </h1>
      <div  className='box-botton-pts'>
      <button onClick={()=> sumarGroups2()}>+</button>
      <h2 className='color-pts-but'>{sumarBut}</h2>
      <h2 className='color-set-but'>{sumarBotScore}</h2>
      <button onClick={()=> restarGroups2()}>-</button>
      </div>
    </div>
  </div>
  )
}

export default BotonesScore