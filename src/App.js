import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/moviedbCard';
import MovieDetails from './components/moviedbDisplay';
import Tvshow from './components/Tvshow';
import People from './components/People';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<Tvshow />} />
        <Route path="/people/:id" element={<People />} />
      </Routes>
    </Router>
  );
}

export default App;

