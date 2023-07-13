import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LibraryPg from './pages/LibraryPg';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/LibraryPg' element={<LibraryPg />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;