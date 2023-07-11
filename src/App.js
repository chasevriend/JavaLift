import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProgramPg from './pages/ProgramPg';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ProgramPg' element={<ProgramPg />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;