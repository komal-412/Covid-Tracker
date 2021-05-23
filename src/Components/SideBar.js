import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button, IconButton, makeStyles, MenuItem } from '@material-ui/core';
import { AnnouncementRounded, HealingRounded, HomeRounded, MenuBook, ViewHeadlineRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  

export default function HideAppBar(props) {
    const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
      <div className={classes.root}>
      <AppBar style={{background: "rgba(54, 162, 235, 0.8)"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuBook />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Covid Tracker
          </Typography>
          <Link to="/">
          <IconButton color="inherit">
              <HomeRounded />
          </IconButton>
          </Link>
          <Link to="/symptoms">
          <IconButton color="inherit">
              <HealingRounded />
          </IconButton>
          </Link>
          <Link to="/Journal">
          <IconButton color="inherit">
              <ViewHeadlineRounded />
          </IconButton>
          </Link>
          
        </Toolbar>
      </AppBar>
    </div>
      </HideOnScroll>      
    </>
  );
}