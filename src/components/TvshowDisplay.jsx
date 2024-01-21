import React,{useState, useEffect} from 'react';
import './TvshowDisplay.css';
import Navbar from './navbar';

export default function TvshowDisplay() {

    const [tvshowDispaly, setTvshowDisply] = useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((responce) => responce.json())
        .then((data)=> setTvshowDisply(data.results))
    }, [])

    return (
        <div className='tvshow_navbar'>
            <Navbar/>
            <div className='entire_tvshow'>
                {
                    tvshowDispaly.map((tvshow)=>(
                        <>
                            <div className='tvshowDetails'>
                                <img src={`https://image.tmdb.org/t/p/w500${tvshow.backdrop_path}`} alt={tvshow.title} className='tvshow_imageDispaly'/>
                                <h3 className='tvshow_name'>{tvshow.name}</h3>
                                <p className='tvshow_releaseDate'>{tvshow.first_air_date}</p>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
