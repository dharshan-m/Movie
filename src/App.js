import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/moviedbCard';
import MovieDetails from './components/movie';
import Tvshow from './components/Tvshow';
import People from './components/People';
import PeopleDispaly from './components/PeopleDisplay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<Tvshow />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/person" element={<PeopleDispaly />} />
      </Routes>
    </Router>
  );
}

export default App;

