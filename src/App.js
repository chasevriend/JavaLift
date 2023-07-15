import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LibraryPg from './pages/LibraryPg';
import ExercisePg from './pages/ExercisePg';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/LibraryPg' element={<LibraryPg />} />
          <Route path='/LibraryPg/:id' element={<ExercisePg />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;