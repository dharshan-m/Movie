import React, {useState} from 'react'
import './displayFrontPage.css';

export default function DisplayFrontpage() {

    const [searchTearm, setSearchTerm] = useState('');

    const handlechangeSearch=(event)=>{
        setSearchTerm(event.target.value)
    }

    const clickSearch=(event)=>{
        event.preventDefault()
    }
    return (
        <div className='total_container'>
            <div className='first_container'>
                <div className='content_div'>
                    <h1 className='head_welcome'>Welcome.</h1>
                    <h3 className='head3_content'>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div className='search_div'>
                    <input type="text" placeholder="Search for a movie,tv show, person..." id='book-search' className='search_input' value={searchTearm} onChange={handlechangeSearch}/>
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
