import React, {useState, useEffect} from 'react'
import './MovieDisplay.css'
import Navbar from './navbar';
import {useNavigate} from 'react-router-dom';

export default function MovieDisplay() {

    const [displayMovie, setDisplayMovie] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((responce) => responce.json())
        .then((data)=>setDisplayMovie(data.results))
    },[])

    const navigate = useNavigate()
    
    const clickDetailpage=(id)=>{
        navigate(`/movies/${id}`);
    }

    return (
        <div className='moviedetails_navbar'>
            <Navbar/>
            <div className='entire_moviedetails'>
                {
                    displayMovie.map((movies)=>(
                        <>
                            <div className='mevieDispaly'>
                                <img  src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} className='movies_imageDisply' onClick={() => clickDetailpage(movies.id)}/>
                                <h3 className='movieDispaly_title'>{movies.title}</h3>
                                <p className='movieDispaly_releasedate'>{movies.release_date}</p>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
