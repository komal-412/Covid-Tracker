import React from 'react'
import './Sidebar.css'
import { HomeRounded, HealingRounded, FormatListBulletedRounded } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div className="sidebar">
            <Link to='/'>
            <div className="app__sidebar__button">
                <IconButton >
                    <HomeRounded/>
                </IconButton>
                <p>Overview</p>
            </div>
            </Link>
            
            <Link to='/symptoms'>
            <div className="app__sidebar__button">
                <IconButton>
                    <HealingRounded  style={{color: "#817C9B"}} />
                </IconButton>
                <p>Symptoms</p>
            </div>
            </Link>
            
            <Link to='/journal'>
            <div className="app__sidebar__button">
                <IconButton>
                    <FormatListBulletedRounded  style={{color: "#817C9B"}} />
                </IconButton>
                <p>Journal</p>
            </div>
            </Link>
        </div>
    );
}

export default SideBar;
