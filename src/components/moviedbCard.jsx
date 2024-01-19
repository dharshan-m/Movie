import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import DisplaySearch from './displayFrontpage';
import './movieCard.css';

function MovieComponent() {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('movies');
    const [subcategory, setSubcategory] = useState('popular');

    useEffect(() => {
        fetchApi(category, subcategory);
    }, [category, subcategory]);

    const fetchApi = (category, subcategory) => {
        let url = '';

    if (category === 'movies') {
        if (subcategory === 'popular') {
            url = 'https://api.themoviedb.org/3/discover/movie?api_key=f470f67e0a8d6712635048ad1c07ac53';
        } 
        else if(subcategory === 'now_playing'){
            url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=f470f67e0a8d6712635048ad1c07ac53';
        }
        else if (subcategory === 'upcoming') {
            url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=f470f67e0a8d6712635048ad1c07ac53';
        } 
        else if (subcategory === 'top_rated') {
            url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f470f67e0a8d6712635048ad1c07ac53';
        }
    }  
        else if (category === 'tv') {
            if (subcategory === 'popular') {
                url = 'https://api.themoviedb.org/3/discover/tv?api_key=f470f67e0a8d6712635048ad1c07ac53';
            } 
            else if (subcategory === 'top_rated') {
                url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=f470f67e0a8d6712635048ad1c07ac53';
            }
            else if(subcategory === 'Airing_today'){
                url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=f470f67e0a8d6712635048ad1c07ac53'
            }
            else if(subcategory === 'on_the_air'){
                url = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=f470f67e0a8d6712635048ad1c07ac53'
            }
    } 
        else if (category === 'people') {
            url = 'https://api.themoviedb.org/3/person/popular?api_key=f470f67e0a8d6712635048ad1c07ac53';
    }

        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data.results));
    };

    const handleSubcategoryChange = (newSubcategory) => {
        setSubcategory(newSubcategory);
    };

return (
    <div className='main_containerCard'>
        <Navbar />
        <DisplaySearch />
        <div className='entire_filter'>
            <div className='label_div'>
                <h3 className='content_filter'>Filter it by Category</h3>
            </div>
            <div className='filter_buttons'>
                <button onClick={() => setCategory('movies')} className='movie_btn' id='btns'>Movies</button>
                <button onClick={() => setCategory('tv')} className='tv_btn' id='btns'>TV Shows</button>
                <button onClick={() => setCategory('people')} className='people_btn' id='btns'>People</button>
            </div>
            {category === 'movies' && (
                <div className='subcategory_buttons'>
                    <button onClick={() => handleSubcategoryChange('popular')} className='subcategory_btn' id='btns'>Popular</button>
                    <button onClick={() => handleSubcategoryChange('now_playing')} className='subcategory_btn' id='btns'>Now playing</button>
                    <button onClick={() => handleSubcategoryChange('top_rated')} className='subcategory_btn' id='btns'>Top Rated</button>
                    <button onClick={() => handleSubcategoryChange('upcoming')} className='subcategory_btn' id='btns'>Upcoming</button>
                </div>
            )}
            {category === 'tv' && (
                <div className='subcategory_buttons_tv'>
                    <button onClick={() => handleSubcategoryChange('Airing_today')} className='subcategory_btn' id='btns'>Airing today</button>
                    <button onClick={() => handleSubcategoryChange('popular')} className='subcategory_btn' id='btns'>Popular</button>
                    <button onClick={() => handleSubcategoryChange('top_rated')} className='subcategory_btn' id='btns'>Top Rated</button>
                    <button onClick={() => handleSubcategoryChange('on_the_air')} className='subcategory_btn' id='btns'>On TV</button>
                </div>
            )}
        </div>

        <div className='movie_list'>
            {data.map((item) => (
                <Link to={`/${category}/${item.id}`} key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path || item.profile_path}`} alt={item.title} className='class_movieCard'/>
                </Link>
            ))}
        </div>
    </div>
    );
}

export default MovieComponent;








































































//     initial setup of creating a movie card and displayed in next page




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './movieCard.css';
// import Navbar from './navbar';
// import DisplaySearch from './displayFrontpage';

// function MovieList() {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         fetch('https://api.themoviedb.org/3/discover/movie?api_key=f470f67e0a8d6712635048ad1c07ac53')
//         .then((response) => response.json())
//         .then((data) => setMovies(data.results));
//     }, []);

//     return (
//         <div className='main_containerCard'>
//             <Navbar/>
//             <DisplaySearch/>
//             <div className="movie_list">
//                 {movies.map((movie) => (
//                 <Link to={`/movie/${movie.id}`} key={movie.id}>
//                   <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='class_movieCard'/>
//                 </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default MovieList;















//          created a main filter with the (Movie   ||  Tv Show   ||  People)





// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './navbar';
// import DisplaySearch from './displayFrontpage';
// import './movieCard.css';

// function MovieComponent() {
// const [data, setData] = useState([]);
// const [category, setCategory] = useState('movies'); 
// const [movieSubcategory, setMovieSubcategory] = useState('popular');
// const [showSubcategories, setShowSubcategories] = useState(false);

// useEffect(() => {
//     fetchApi(category, movieSubcategory);
// }, [category, movieSubcategory]);

// const fetchApi = (category) => {
//     let url = '';
//     if (category === 'movies') {
//     url = 'https://api.themoviedb.org/3/discover/movie?api_key=f470f67e0a8d6712635048ad1c07ac53';
//     } else if (category === 'tv') {
//     url = 'https://api.themoviedb.org/3/discover/tv?api_key=f470f67e0a8d6712635048ad1c07ac53';
//     } else if (category === 'people') {
//     url = 'https://api.themoviedb.org/3/person/popular?api_key=f470f67e0a8d6712635048ad1c07ac53';
// }

//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => setData(data.results))
// };

// return (
//     <div className='main_containerCard'>
//         <Navbar/>
//         <DisplaySearch/>
//         <div className='entire_filter'>
//             <div className='label_div'>
//                 <h3 className='content_filter'>Filter it by Category</h3>
//             </div>
//             <div className='buttons_div'>
//                 <div className='filter_buttons'>
//                     <button onClick={() => setCategory('movies')} className='movie_btn' id='btns' onMouseEnter={() => setShowSubcategories(true)} onMouseLeave={() => setShowSubcategories(false)}>Movies</button>
//                     <button onClick={() => setCategory('tv')} className='tv_btn' id='btns'>TV Shows</button>
//                     <button onClick={() => setCategory('people')} className='people_btn' id='btns'>People</button>
//                 </div>
//                 {showSubcategories && category === 'movies' && (
//                     <div className={`movie_subcategories ${showSubcategories ? 'show' : ''}`}>
//                         <button onClick={() => setMovieSubcategory('popular')} className='categories_popular' id='categories_button'>Popular</button>
//                         <button onClick={() => setMovieSubcategory('upcoming')} className='categories_upcoming' id='categories_button'>Upcoming</button>
//                         <button onClick={() => setMovieSubcategory('top_rated')} className='categories_top_rated' id='categories_button'>Top Rated</button>
//                     </div>
//                 )}
//             </div>
//         </div>

//         <div className="movie_list">
//             {data.map((item) => (
//                 <Link to={`/${category}/${item.id}`} key={item.id}>
//                     <img src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path || item.profile_path}`} alt={item.title} className='class_movieCard'/>
//                 </Link>
//             ))}
//         </div>
//     </div>
//     );
// }

// export default MovieComponent;