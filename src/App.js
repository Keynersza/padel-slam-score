import logo from './logo.svg';

import Score from './Pages/score';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Score2 from './Pages/score2,';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/score1' element={<Score />} /> */}
        <Route path='/score2' element={<Score2 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

