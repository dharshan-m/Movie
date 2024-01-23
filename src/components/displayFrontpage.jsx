import React, {useState} from 'react'
import './displayFrontPage.css';
import {useNavigate} from 'react-router-dom';

export default function DisplayFrontpage() {

    const navigate = useNavigate()

    const [searchTerm, setSearchTerm] = useState('');

    const handlechangeSearch=(event)=>{
        setSearchTerm(event.target.value)
    }


    const clickSearch = (event) => {
        event.preventDefault();

        if (searchTerm.trim() !== '') {
            const isMovie = /^movie$/i.test(searchTerm);
            const isMovieSearch = /^movie:(.+)$/i.test(searchTerm);
            const isTvshow = /^tv$/i.test(searchTerm);
            const isTvshowSearch = /^tv:(.+)$/i.test(searchTerm);
            const isPerson = /^person$/i.test(searchTerm);
            const isPeopleSearch = /^person:(.+)$/i.test(searchTerm);

            if (isMovie || isMovieSearch) {
                if (isMovieSearch) {
                const movieName = searchTerm.match(/^movie:(.+)$/i)[1];
                navigate(`/movies/${movieName}`);
                } else {
                navigate('/movie');
                }
            } else if (isTvshow || isTvshowSearch) {
                if(isTvshowSearch){
                    const tvshowName = searchTerm.match(/^tv:(.+)$/i)[1];
                    navigate(`/tv/${tvshowName}`);
                }else{
                    navigate(`/tv`)
                }
            } else if (isPerson || isPeopleSearch) {
                if(isPeopleSearch){
                    const personName = searchTerm.match(/^person:(.+)$/i)[1];
                    navigate(`/person/${personName}`);
                }else{
                    navigate(`/person`)
                }
            } else {
                navigate(`/movie/${searchTerm}`);
            }
        }
    };


    return (
        <div className='total_container'>
            <div className='first_container'>
                <div className='content_div'>
                    <h1 className='head_welcome'>Welcome.</h1>
                    <h3 className='head3_content'>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div className='search_div'>
                    <input type="text" placeholder="Search for a movie,tv show, person..." id='book-search' className='search_input' value={searchTerm} onChange={handlechangeSearch}/>
                    <button className='button_click' onClick={clickSearch}>Search</button>
                </div>  
            </div>
            <div className='second_container'>
                <h1 id='same_value' className='wrap_heading'>That's a Wrap 2023</h1>
                <h3 id='same_value' className='best_worst_content'>The best (and worst) of the year from TMDB.</h3>
                <button className='button_check'>Check it out</button>
            </div>
        </div>
    )
}
