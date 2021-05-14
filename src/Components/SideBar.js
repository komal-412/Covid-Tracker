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
                <IconButton className="sidebar__button">
                    <HomeRounded/>
                </IconButton>
            </div>
            </Link>
            <Link to='/symptoms'>
            <div className="app__sidebar__button">
                <IconButton className="sidebar__button">
                    <HealingRounded/>
                </IconButton>
            </div>
            </Link>
            <Link to='/journal'>
            <div className="app__sidebar__button">
                <IconButton className="sidebar__button">
                    <FormatListBulletedRounded />
                </IconButton>
            </div>
            </Link>
        </div>
    );
}

export default SideBar;
