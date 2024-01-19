import React, {useState, useEffect} from 'react'

export default function MovieDisplay() {

    const [displayMovie, setDisplayMovie] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((responce) => responce.json())
        .then((data)=>setDisplayMovie(data.results))
    },[])

    return (
        <div>
            {
                displayMovie.map((movies)=>(
                    <img src={movies.poster_path} alt={movies.title} className='movies_imageDisply'/>
                ))
            }
        </div>
    )
}
