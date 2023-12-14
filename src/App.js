
import Score from './Pages/createDuplas.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Score2 from './Pages/score2,';
import { useState } from 'react';
import Tournament from './Views/Tournament';
import BotonesScore from './Views/botonesScore';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Score />} /> 
        <Route path='/b' element={<BotonesScore />} /> 
        <Route path='/games' element={<Tournament />} /> 
        <Route path='/score/:id' element={<Score2 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

