import React,{useState, useEffect} from 'react';
import './TvshowDisplay.css';
import Navbar from './navbar';
import {useNavigate} from 'react-router-dom';

export default function TvshowDisplay() {

    const [category, setcategory] = useState('popular');
    const [tvshowDispaly, setTvshowDisply] = useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((responce) => responce.json())
        .then((data)=> setTvshowDisply(data.results))
    }, [])

    const navigate = useNavigate();

    const clicktvDetails=(id)=>{
        navigate(`/tv/${id}`)
    }


    useEffect(()=>{
        fetchapi();
    }, [category]);

    const fetchapi=()=>{
        let url = '';

        if (category === 'popular') {
            url = 'https://api.themoviedb.org/3/discover/tv?api_key=f470f67e0a8d6712635048ad1c07ac53';
        } else if (category === 'Airing_today') {
            url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=f470f67e0a8d6712635048ad1c07ac53';
        } else if (category === 'top_rated') {
            url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=f470f67e0a8d6712635048ad1c07ac53';
        } else if (category === 'on_the_air') {
            url = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=f470f67e0a8d6712635048ad1c07ac53';
        }

        fetch(url)
            .then((responce) => responce.json())
            .then((data) => setTvshowDisply(data.results));
    }

    return (
        <div className='tvshow_navbar'>
            <Navbar/>
            <div className='button_entire_div'>
                <div className='content_div'>
                    <h2 className='content_filter'>Filter your Tvshows by categories</h2>
                </div>
                <div className='div_btn'>
                    <button onClick={() => setcategory('popular')} className='subcategory_btn'>Airing today</button>
                    <button onClick={() => setcategory('Airing_today')} className='subcategory_btn'>Popular</button>
                    <button onClick={() => setcategory('top_rated')} className='subcategory_btn'>Top Rated</button>
                    <button onClick={() => setcategory('on_the_air')} className='subcategory_btn'>On TV</button>  
                </div>
            </div>
            <div className='entire_tvshow'>
                {
                    tvshowDispaly.map((tvshow) => (
                        <div key={tvshow.id} className='tvshowDetails'>
                            <img src={`https://image.tmdb.org/t/p/w500${tvshow.backdrop_path}`} alt={tvshow.title} className='tvshow_imageDispaly' onClick={() => clicktvDetails(tvshow.id)} />
                            <h3 className='tvshow_name'>{tvshow.original_name}</h3>
                            <p className='tvshow_releaseDate'>{tvshow.first_air_date}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
