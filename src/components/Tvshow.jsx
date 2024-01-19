import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './moviedbDisplay.css';
import Navbar from './navbar';

function Tvshow() {
    const { id } = useParams();
    const [tvshowDetails, setTvshowDetails] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=f470f67e0a8d6712635048ad1c07ac53`)
        .then((response) => response.json())
        .then((data) => setTvshowDetails(data));
    }, [id]);

    return (
        <div className='main_cointainerDisplay'>
            <Navbar/>
            <div className="movie_details">
                {tvshowDetails && (
                <>
                    <div className='div_imageproperty'>
                        <img src={`https://image.tmdb.org/t/p/w500${tvshowDetails.poster_path}`}alt={tvshowDetails.title} className='image_displaypage'/>
                    </div>
                    <div className='details_display'>
                        <h1 id='details'>{tvshowDetails.name}</h1>
                        <p id='details'><strong id='strong'>Original Title : </strong>{tvshowDetails.name}</p>
                        <p id='details'><strong id='strong'>Popularity : </strong>{tvshowDetails.popularity}</p>
                        <p id='details'><strong id='strong'>Language : </strong>{tvshowDetails.original_language}</p>
                        <p id='details'><strong id='strong'>Release Date : </strong>{tvshowDetails.first_air_date}</p>
                        <p id='details'><strong id='strong'>Average-vote : </strong>{tvshowDetails.vote_average}</p>
                        <p id='details'><strong id='strong'>Average-count : </strong>{tvshowDetails.vote_count}</p>
                        <p id='details' className='overview'><strong id='strong'>Overview : </strong>{tvshowDetails.overview}</p>
                    </div>
                </>
                )}
            </div>
        </div>
    );
}

export default Tvshow;

