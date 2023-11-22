
import Score from './Pages/score';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Score2 from './Pages/score2,';
import { useState } from 'react';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/score1' element={<Score />} /> 
        <Route path='/' element={<Score2 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

