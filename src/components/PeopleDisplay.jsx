import React,{useState, useEffect} from 'react'
import "./PeopleDisplay.css";
import Navbar from './navbar';
import {useNavigate} from "react-router-dom";

export default function PeopleDisplay() {

    const [peopleDisplay, setPeopleDisplay] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/person/popular?api_key=f470f67e0a8d6712635048ad1c07ac53')
        .then((responce) => responce.json())
        .then((data) => setPeopleDisplay(data.results))
    }, [])

    const navigate = useNavigate()

    const clickPeopleDetails=(id)=>{
        navigate(`/people/${id}`)
    }

    return (
        <div className='navbar_peopledispaly'>
            <Navbar/>
            <div className='entire_peopleDispaly'>
                {
                    peopleDisplay.map((people)=>(
                        <div key={people.id} className='peopleDisplay'>
                            <img src={`https://image.tmdb.org/t/p/w500${people.profile_path}`} alt={people.name} className='profile_image' onClick={()=>clickPeopleDetails(people.id)}/>
                            <h3 className='peopledisplay_name'>{people.name}</h3>
                            <p className='peopledisplay_department'>{people.known_for_department}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
