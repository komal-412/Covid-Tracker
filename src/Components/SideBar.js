import React from 'react'
import './Sidebar.css'
import { HomeRounded, HealingRounded, FormatListBulletedRounded } from '@material-ui/icons'
import { IconButton} from '@material-ui/core'
import { Link } from 'react-router-dom'

function SideBar() {
        return (
        <div className="sidebar">
            <Link to='/' className="sidebar__link">
            <div className="app__sidebar__button">
                <IconButton>
                    <HomeRounded/>
                </IconButton>
            </div>
            </Link>
            <p>Overview</p>
            <Link to='/symptoms'>
            <div className="app__sidebar__button">
                <IconButton>
                    <HealingRounded  style={{color: "#817C9B"}} />
                </IconButton>
            </div>
            </Link>
            <p className="p2">Symptoms</p>
            <Link to='/journal'>
            <div className="app__sidebar__button">
                <IconButton>
                    <FormatListBulletedRounded  style={{color: "#817C9B"}} />
                </IconButton>
            </div>
            </Link>
            <p className="p3">Journal</p>
        </div>
    );
}

export default SideBar;
