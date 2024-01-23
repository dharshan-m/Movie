// import React, {useState, useEffect} from 'react'
// import './MovieDisplay.css'
// import Navbar from './navbar';
// import {useNavigate} from 'react-router-dom';

// export default function MovieDisplay() {

//     const [displayMovie, setDisplayMovie] = useState([]);

//     useEffect(()=>{
//         fetch('https://api.themoviedb.org/3/discover/movie?api_key=f470f67e0a8d6712635048ad1c07ac53')
//         .then((responce) => responce.json())
//         .then((data)=>setDisplayMovie(data.results))
//     },[])

//     const navigate = useNavigate()
    
//     const clickDetailpage=(id)=>{
//         navigate(`/movies/${id}`);
//     }

//     const [category, setcategory] = useState('popular')

//     useEffect(()=>{
//         fetchapi()
//     }, [category])

//     const fetchapi=()=>{
//         let url = '';

//         if(category === 'popular'){
//             url = 'https://api.themoviedb.org/3/discover/movie?api_key=f470f67e0a8d6712635048ad1c07ac53';
//         }else if(category === 'now_playing'){
//             url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=f470f67e0a8d6712635048ad1c07ac53';
//         } else if(category === 'upcoming'){
//             url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=f470f67e0a8d6712635048ad1c07ac53';
//         } else if(category === 'top_rated'){
//             url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f470f67e0a8d6712635048ad1c07ac53';
//         }

//         fetch(url)
//         .then((response) => response.json())
//         .then((data) => setDisplayMovie(data.results));
//     }

//     // const cliknextpage=(newSubcategory)=>{
//     //     setcategory(newSubcategory);
//     // }

//     return (
//         <div className='moviedetails_navbar'>
//             <Navbar/>
//             <div className='button_divs'>
//                 <div className='div_front_content'>
//                     <h3 className='class_front_content'>Filter your movies by category</h3>
//                 </div>
//                 <div className='button_rows'>
//                     <button onClick={()=>setcategory('now_playing')} className='subcategory_btn'>Now Playing</button>
//                     <button onClick={()=>setcategory('upcoming')} className='subcategory_btn'>Upcomming</button>
//                     <button onClick={()=>setcategory('popular')} className='subcategory_btn'>popular</button>
//                     <button onClick={()=>setcategory('top_rated')} className='subcategory_btn'>Top Rated</button>
//                 </div>
//             </div>
//             <div className='entire_moviedetails'>
//                 {
//                     displayMovie.map((movies)=>(
//                         <>
//                             <div key={movies.id} className='mevieDispaly'>
//                                 <img  src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} className='movies_imageDisply' onClick={() => clickDetailpage(movies.id)}/>
//                                 <h3 className='movieDispaly_title'>{movies.title}</h3>
//                                 <p className='movieDispaly_releasedate'>{movies.release_date}</p>
//                             </div>
//                         </>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// }






import React, { useState, useEffect } from 'react';
import './MovieDisplay.css';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

export default function MovieDisplay() {
    const [displayMovie, setDisplayMovie] = useState([]);
    const [category, setCategory] = useState('popular');

    useEffect(() => {
        fetchapi();
    }, [category]);

    const navigate = useNavigate();

    const clickDetailpage = (id) => {
        navigate(`/movies/${id}`);
    };

    const fetchapi = () => {
        let url = '';

    if (category === 'popular') {
        url = 'https://api.themoviedb.org/3/discover/movie?api_key=f470f67e0a8d6712635048ad1c07ac53';
    } else if (category === 'now_playing') {
        url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=f470f67e0a8d6712635048ad1c07ac53';
    } else if (category === 'upcoming') {
        url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=f470f67e0a8d6712635048ad1c07ac53';
    } else if (category === 'top_rated') {
        url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f470f67e0a8d6712635048ad1c07ac53';
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => setDisplayMovie(data.results));
};

    return (
        <div className='moviedetails_navbar'>
            <Navbar />
            <div className='button_divs'>
                <div className='div_front_content'>
                    <h2 className='class_front_content'>Filter your movies by category</h2>
                </div>
                <div className='button_rows'>
                    <button onClick={() => setCategory('popular')} className='subcategory_btn'>Popular</button>
                    <button onClick={() => setCategory('now_playing')} className='subcategory_btn'>Now Playing</button>
                    <button onClick={() => setCategory('top_rated')} className='subcategory_btn'>Top Rated</button>
                    <button onClick={() => setCategory('upcoming')} className='subcategory_btn'>Upcoming</button>
                </div>
            </div>
            <div className='entire_moviedetails'>
                {displayMovie.map((movies) => (
                    <div key={movies.id} className='mevieDispaly'>
                        <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} className='movies_imageDisply' onClick={() => clickDetailpage(movies.id)}/>
                        <h3 className='movieDispaly_title'>{movies.title}</h3>
                        <p className='movieDispaly_releasedate'>{movies.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
