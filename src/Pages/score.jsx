import React, { useState } from 'react';
import logo from '../Assets/BlancoLogo.png';
import Inputs from '../Components/Inputs';

const Score = () => {
  const [name, setName] = useState('')
  return (
    <div>
    <Inputs
    type = 'text'
    name ='name'
    value={name}
    onChanged={(e) => setName(e.target.value)}
    /> 
    {name && 
    <Inputs
    type = 'text'
    name ='name'
    value={name}
    onChanged={(e) => setName(e.target.value)}
    /> 
  }
    </div>
  );
};

export default Score;

