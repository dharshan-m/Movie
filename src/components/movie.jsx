import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './moviedbDisplay.css'
import Navbar from './navbar';

function MovieDisplay() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // fetch(`https://api.themoviedb.org/3/discover/movie/${id}?api_key=f470f67e0a8d6712635048ad1c07ac53`)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f470f67e0a8d6712635048ad1c07ac53`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data));
  }, [id]);

  return (
    <div className='main_cointainerDisplay'>
      <Navbar/>
      <div className="movie_details">
        {movieDetails && (
          <>
            <div className='div_imageproperty'>
              <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}alt={movieDetails.title} className='image_displaypage'/>
            </div>
            <div className='details_display'>
              <h1 id='details'>{movieDetails.title}(2023)</h1>
              <p id='details'><strong id='strong'>Original Title : </strong>{movieDetails.original_title}</p>
              <p id='details'><strong id='strong'>Popularity : </strong>{movieDetails.popularity}</p>
              <p id='details'><strong id='strong'>Language : </strong>{movieDetails.original_language}</p>
              <p id='details'><strong id='strong'>Release Date : </strong>{movieDetails.release_date}</p>
              <p id='details'><strong id='strong'>Average-vote : </strong>{movieDetails.vote_average}</p>
              <p id='details'><strong id='strong'>Average-count : </strong>{movieDetails.vote_count}</p>
              <p id='details' className='overview'><strong id='strong'>Overview : </strong>{movieDetails.overview}</p>
            </div>
          </> 
        )}
      </div>
    </div>
  );
}

export default MovieDisplay;  
