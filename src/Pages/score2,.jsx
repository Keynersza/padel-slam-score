import React, { useEffect, useState } from 'react';
import imagen from '../Assets/Recurso 3Fondo.png';
import logo from '../Assets/OriginalLogo.png'
import icono from '../Assets/arreglo-raqueta.jpg';
import vs from '../Assets/IconVS.png';
import {useParams} from 'react-router-dom'
import { useGameStore } from '../Components/Torneo/hooks.ts';
import BotonControllers from '../Controllers/bottonController.js';
const Score2 = () => {
 const {sumarPunt} = BotonControllers()
 console.log("hola",sumarPunt);
  const {torneo} = useGameStore()
  const [gameScore, setGameScore] = useState([])
  const [ressult, setRessult] = useState(0)
  const {id} = useParams()
  let puntosGruops1 = localStorage.getItem("puntos")
  let puntosGroups2 = localStorage.getItem("puntosGruops2")
  let setTop = localStorage.getItem("setsTop")
  let setBot = localStorage.getItem("setsBot")
  
  const filterGame = () =>{
    let game = 
    torneo?.groups[0]?.games.filter((element) => element.id === id)
    setGameScore(game) 
  }
  /* if (puntos == 40) {
   return set + 1
  } */
  useEffect(() => {
  filterGame()
  }, [])
  
  return (
    <div>
      <div className="container">
        <img
          src={imagen}
          style={{
            width: '100%',
            height: '965px',
            position: 'absolute',
            objectFit: 'none',
            objectPosition: 'center',
            clipPath: 'polygon(0px 0px, 72% 0%, 41% 143%, 0% 100%)',
          }}
        />
        {gameScore.map((juego) => (
          <>
          <div className="name-two">
          <h2>{juego.left.jugador1}</h2>
          <h2>{juego.left.jugador2}</h2>
        </div>
        <div className="name-button">
          <h2>{juego.right.jugador1}</h2>
          <h2>{juego.right.jugador2}</h2>
        </div>
          
        
      
        <img src = {vs} style={{
           position: 'absolute',
           width: '137px',
           top: "39%",
           left: "11%"
        }}/>
        <div className="puntos-partida">
          <h1 className="puntos-left">{puntosGruops1}</h1>
          <h1 className="puntos-righ">{puntosGroups2}</h1>
        </div>
        <div className="border-team-b">
          <p>Equipo A</p>
        </div>
        <div className="box-1-top"></div>
        <div className="box-2-top"></div>
        <div className="box-1-botton"></div>
        <div className="box-2-botton"></div>
        <div className="border-team-a">
          <p>Equipo B</p>
        </div>
        <div className="sets-partida">
          <h1 className="sets-top">{setTop}</h1>
          <h1 className="sets-buttom">{setBot}</h1>
        </div>
        </>
          )
          )}
        <h2 className="linea-top"></h2>
        <h2 className="linea-rotate"></h2>
        <h2 className="linea-buttom"></h2>
        <h2 className="linea-top-buttom"></h2>
        <h2 className="linea-rotate-buttom"></h2>
        <h2 className="linea-buttom-buttom"></h2>
        <h1 className="title-padel">PADELSLAM</h1>\
        <div className="box-cancha">
          <p className="cancha">CANCHA:</p>
          <p className="numero-cancha">6</p>
        </div>
      </div>

      <div className="categoria">
        <p className="title-categoria">CATEGORIA:</p>
        <p className="numero-categoria">6</p>
      </div>

      <div className="time">
        <p>00:00</p>
      </div>
          <img src = {logo} style = {{
                position: 'absolute',
                width: '420px',
                right: '26px',
                top: '-13px'
          }}/>
      <div className="puntuaciones">
        <div className="sets">
          <p>SET 1</p>
          <p>SET 2</p>
          <p>SET 3</p>
        </div>
        <div className="puntuacion-set">
          <div className="puntuacion-1">
            <p>6</p>
            <p>-</p>
            <p>-</p>
          </div>
          <div className="puntuacion-2">
            <p>1</p>
            <p>-</p>
            <p>-</p>
          </div>
        </div>
      </div>
      <div>
        <h2>SPONSOR /</h2>
        <h2>Viajes Humbolt desde 1985 haciendo historia</h2>
      </div>
      <div>
        <img
          src={icono}
          style={{
            width: '611px',
            height: '34vh',
            position: 'absolute',
            right:"0",
            bottom: "0",
            clipPath: 'circle(96.3% at 83% 100%)',
          }}
        />
      </div>
    </div>
  );
};

export default Score2;
