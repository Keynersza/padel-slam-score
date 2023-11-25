import React, { useEffect, useState } from 'react';
import logo from '../Assets/BlancoLogo.png';
import { useGameStore } from '../Components/Torneo/hooks.ts';

const Score = () => {
  const [inputs, setInputs] = useState([
    {
      name: 'Dupla 1',
      jugador1: '',
      jugador2: '',
      win: 0,
      lose: 0,
    },
  ]);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const { createGames } = useGameStore();
  const handleChange = (e, index, input) => {
    let data = [...inputs];
    if (data) {
      data[index][e.target.name] = e.target.value;
      setInputs(data);
    } else {
      setInputs();
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
    }

    return;
  };

  const send = async (e) => {
    e.preventDefault();
    console.log(createGames(inputs));
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setErrorMessage();
    }, 5000);
  }, []);

  return (
    <div>
      <div>
        <h2>
          Introduzca los jugadores que seran seleccionados para el Torneo!
        </h2>
      </div>
      {errorMessage ? errorMessage : ''}
      {inputs.map((input, index) => (
        <>
          <div>
            <span>{input.name}</span>
            <label htmlFor="">Jugador A</label>
            <input
              onChange={(e) => handleChange(e, index, input)}
              className={error ? 'message' : ''}
              key={index}
              value={input.jugador1}
              name={'jugador1'}
              type="text"
            />
          </div>

          <div>
            <label htmlFor="">Jugador B</label>
            <input
              onChange={(e) => handleChange(e, index, input)}
              className={error ? 'message' : ''}
              key={index}
              value={input.jugador2}
              name={'jugador2'}
              type="text"
            />
          </div>
        </>
      ))}
      {}
      <button onClick={add}>Agregas mas Duplas</button>
      <button onClick={send}>add</button>
    </div>
  );
};

export default Score;
