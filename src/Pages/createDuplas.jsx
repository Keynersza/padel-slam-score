import React, { useEffect, useState } from 'react';
import { useGameStore } from '../Components/Torneo/hooks.ts';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import players from '../Assets/748.jpg';
import icon1 from '../Assets/IconImg/icons8-facebook-como-piel-tipo-1-100.png';
import icon2 from '../Assets/IconImg/icons8-entradas-100.png'
import icon3 from '../Assets/IconImg/icons8-trofeo-96.png';
import playerFond from '../Assets/tennispadel.png';
import { Loading } from '../Components/loading.jsx';
import Nav from '../Components/Navegation/nav.jsx';
import SwipeAuto from '../Components/Swipers/SwipeAuto.jsx';
import Footer from '../Components/Footer/footer.jsx';
const Score = () => {
  const [inputs, setInputs] = useState([
    {
      name: 'Dupla 1',
      jugador1: '',
      jugador2: '',
      win: 0,
      lose: 0,
      res: 0
    },
  ]);

  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorTrue, setErrorTrue] = useState(false);
  const { createGames } = useGameStore();
  const navigate = useNavigate();
  const handleChange = (e, index, input) => {
    let data = [...inputs];
    if (data) {
      data[index][e.target.name] = e.target.value;
      setInputs(data);
    } else {
      setInputs();
    }

    if (inputs[0].jugador1.length > 0 || inputs[0].jugador2.length > 0) {
      setErrorTrue(true);
      setError(false);
    } else {
      setErrorTrue(false);
    }
    console.log('data :>> ', inputs);
    console.log('index :>> ', index);
  };

  const add = (index) => {
    if (
      inputs.reduce((Vp, Va) => {
        return Vp && Va.jugador1.length > 0 && Va.jugador2.length > 0;
      }, true)
    ) {
      setInputs([
        ...inputs,
        {
          jugador1: '',
          jugador2: '',
          name: 'Dupla ' + (inputs.length + 1),
          win: 0,
          lose: 0,
        },
      ]);
    } else {
      setError(true);
      setErrorTrue(false);
    }
    return;
  };

  const send = async (e) => {
    e.preventDefault();
    setLoading(true);
    let validateInputs = [...inputs];
    if (validateInputs.length < 8) {
      setTimeout(() => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Minimo 8 Duplas!',
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }, 1000);
    } else {
      console.log('Si');
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Torneo Creado!',
          text: 'Mucha suerte y disfruta el torneo con Padel Slam',
          footer: '<a href="#">Why do I have this issue?</a>',
        }).then((res) => {
          if (res) {
            setLoading(false);
            console.log(createGames(inputs));
            navigate('/games');
          }
        });
      }, 2000);
    }
  };
  const sideVar = () => {
    setOpen(!open);
    /*   if (!open) {
      
    } */
  };

  /*  useEffect(() => {
    setTimeout(() => {
      if ({...inputs.length > 0}) {
        setErrorTrue(true)
        setError(false);
      }else{
        setErrorTrue(false)
        setError(true);
        setErrorMessage();
      }
    }, 3000); 
  }, [error]); */

  return (
    <>
      <header>
        <Nav open={open} />
        <button className="menu-responsive" onClick={() => sideVar()}>
          Menu
        </button>
      </header>
      <div className="create-duple-tournament">
        {/*  <img src={fondPadel} className='fond-padel-games' />  */}
        {loading ? (
          <Loading />
        ) : (
          <>
          <div className='container-mini-header'>
            <div className='box-con'>
            <h2>Bienvenido a Torneos Padel Slam </h2>
            <p>Únete a las millones de personas que confían en Padel Slam para administrar sus torneos</p>
            <button>Ver</button>
            </div>
            <div>
            <img src={playerFond} className='img-mini-header'/>
            </div>
          </div>
          
          <div className='card-container'>
              <div className='like-padel-slam'>
                <img src={icon1} style={{
                  width: "100px"
                }}/>
                <div>
              <h3>Me gusta Padel Slam Tournarments!</h3>
              <p>
                A miles de Personas le parecieron maravillosa nuestra compañia y viven una experiencia increible con Padel Slam Tournaments!  
              </p>
                </div>
              </div>
              <div className='boleto-padel-slam'>
                <img src={icon2} style={{
                  width: "100px"
                }}/>
              <div>
                <h3>No te pierdas los Torneos de Padel Slam!</h3>
                <p>Puedes ponerte comodo y disfrutar los grandes juegos de Padel Slam desde tu casa.
                No dudes en pedir tus entradas!
                 </p>
              </div>
              </div>
              <div className='trofeo-padel-slam'>
                <img src={icon3} style={{
                  width: "100px"
                }}/>
              <div>
                <h3>Participa en Torneos Padel Slam</h3>
                <p>Comienza a vivir una experiencia de Torneos Padel Slam, no te vas arrepentir de esta gran experiencia!</p>
                <button>Crear Torneo</button>
              </div>
              </div>
             {/*  <img src={players} className='img-card-container' />  */}
            </div>
            <h2 className="title-create-tournament" id='title'>
              Enter the players who will be selected for the Tournament!
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="contenedor-box-inputs"
            >
              {errorMessage ? errorMessage : ''}
              {inputs.map((input, index) => (
                <>
                  <div>
                    <h2 className="name-dupla">{input.name}</h2>
                    <div className="input-padel-score">
                      <label htmlFor="" className="players-a">
                        Player A
                      </label>
                      <input
                        onChange={(e) => handleChange(e, index, input)}
                        className={error ? 'message' : errorTrue && 'true'}
                        key={index}
                        value={input.jugador1}
                        name={'jugador1'}
                        type="text"
                      />
                    </div>
                    <div className="input-padel-score">
                      <label htmlFor="" className="players-b ">
                        Player B
                      </label>
                      <input
                        onChange={(e) => handleChange(e, index, input)}
                        className={error ? 'message' : errorTrue && 'true'}
                        key={index}
                        value={input.jugador2}
                        name={'jugador2'}
                        type="text"
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <>
                <button onClick={add} className="add-duple">
                  Agregar Dupla
                </button>
              </>
              {inputs.length >= 8 ? (
                <button onClick={send} className="create-tournament">
                  Crear Torneo
                </button>
              ) : (
                ''
              )}
            </div>
            {/*    <br />
            <br />
            <br />
            <br />
            <br />
            <footer>
        <Footer />
      </footer> */}
          </>
        )}
      </div>
    </>
  );
};

export default Score;
