import React from 'react'
import './navbar.css';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExplicitOutlinedIcon from '@mui/icons-material/ExplicitOutlined';
import AddIcon from '@mui/icons-material/Add';

export default function navbar() {
  return (
    <div className='display_navbar'>
        <div className='front_tag'>
            <h1 id='title_colour' className='heading'>TMDB</h1>
            <div className='link_tags'>
                <p id='colour' className='sub_title'>Movies</p>
                <p id='colour' className='sub_title'>TV Shows</p>
                <p id='colour' className='sub_title'>People</p>
                <p id='colour' className='sub_title'>More</p>
            </div>
        </div>
        <div className='back_tag'>
            <AddIcon sx={{ color: 'white' }} id='pointer'/>
            <ExplicitOutlinedIcon sx={{ color: 'white' }} id='pointer'/>
            <NotificationsIcon sx={{ color: 'white' }} id='pointer'/>
            <Avatar sx={{ bgcolor: deepPurple[500] }} id='pointer'>D</Avatar>
            <SearchIcon sx={{ color: 'white' }} id='pointer'/>
        </div>
    </div>
  )
}
