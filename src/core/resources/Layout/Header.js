// Import Dependencies and Libraries
import React, { Component } from 'react';
import { AppBar, Toolbar, makeStyles, Divider, Button } from '@material-ui/core';
import { Navbar } from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// Import Layout Components
import DropdownList from './DropdownList';
import TextSearch   from './TextSearch';
import Quotation    from './Quotation';
import NavBar       from './NavBar.js';

// Import Logo
const logo = require('./logo_fla_mod2_branco.png');

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    favButton: {
        position: 'relative',
        left: -60,
    },
    profileButton:{
        position: 'relative',
        left: -40
    }
}));

export default function Header() {

    const classes = useStyles();

    return(
        <div>
            <AppBar position="fixed" style={{background: '#3e5e3b', display:'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                {/* Toolbar style */}
                <Toolbar style={{position: 'relative', alignContent: 'center', justifyContent: 'center'}}>
                        <img src={logo} width='7%' height='7%' onClick={() => {handleLogoClick()}} />
                        <DropdownList />
                        <TextSearch />
                        <Quotation />
                        <FavoriteIcon className={classes.favButton} fontSize='large' />
                        <AccountCircleIcon className={classes.profileButton} fontSize='large'/>
                </Toolbar>
                <Divider component="li" variant="fullWidth" />
                <NavBar />
            </AppBar>
            
        </div>
    );
}

function handleLogoClick() {
    console.log('logo clicked');
} 
