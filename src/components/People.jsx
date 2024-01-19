import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './moviedbDisplay.css';
import Navbar from './navbar';

function PeopleDetails() {
    const { id } = useParams();
    const [personDetails, setPersonDetails] = useState(null);

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=f470f67e0a8d6712635048ad1c07ac53`)
        .then((response) => response.json())
        .then((data) => setPersonDetails(data));
    }, [id]);

return (
        <div className='main_cointainerDisplay'>
        <Navbar />
            <div className="movie_details">
                {personDetails && (
                <>
                    <div className='div_imageproperty'>
                        <img src={`https://image.tmdb.org/t/p/w500${personDetails.profile_path}`} alt={personDetails.name} className='image_displaypage' />
                    </div>
                    <div className='details_display'>
                        <h1 id='details'>{personDetails.name}</h1>
                        <p id='details'><strong id='strong'>Popularity: </strong>{personDetails.popularity}</p>
                        <p id='details'><strong id='strong'>Role: </strong>{personDetails.known_for_department}</p>
                        <p id='details'><strong id='strong'>Gender: </strong>{personDetails.gender}</p>
                        <p id='details'><strong id='strong'>Biography: </strong>{personDetails.biography}</p>
                    </div>
                </>
                )}
            </div>
        </div>
    );
}

export default PeopleDetails;

