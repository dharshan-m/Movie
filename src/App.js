import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/moviedbCard';
import MovieDetails from './components/movie';
import Tvshow from './components/Tvshow';
import People from './components/People';
import PeopleDispaly from './components/PeopleDisplay';
import MovieDispaly from './components/MovieDisplay';
import TvshowDispaly from './components/TvshowDisplay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<Tvshow />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/person" element={<PeopleDispaly />} /> 
        <Route path="/movie" element={<MovieDispaly />} />
        <Route path="/tv" element={<TvshowDispaly />} />
      </Routes>
    </Router>
  );
}

export default App;

