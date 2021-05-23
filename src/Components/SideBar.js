import React from 'react'
import './Sidebar.css'
import { HomeRounded, HealingRounded, FormatListBulletedRounded } from '@material-ui/icons'
import { IconButton} from '@material-ui/core'
import { Link } from 'react-router-dom'

function SideBar() {
        return (
           
        <div className="sidebar">
            <div>
                 <Link  to="/" edge="start" color="inherit" aria-label="menu" className="logo">
            <img src="https://th.bing.com/th/id/Ra0620eb1a25961bb3187d4bb2b9fe10a?rik=kybE%2fEe0om%2bveA&riu=http%3a%2f%2fwww.respilon.com%2fproducts%2fprofessional-halfmask%2fdata%2fnull%2fRESPILON_White_Half_Mask_vizo-01.png&ehk=MDHSufzy4UECXE%2bW4%2bPfxFQqah2YbrSsDP16F6AVO6c%3d&risl=&pid=ImgRaw" height="50px"  />
          </Link>
          </div>
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
