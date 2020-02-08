// Import Dependencies and Libraries
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

// Import Icons
import FavoriteIcon         from '@material-ui/icons/Favorite';
import AccountCircleIcon    from '@material-ui/icons/AccountCircle';

// Import Layout Components
import DropdownList from './DropdownList';
import TextSearch   from './TextSearch';
import Quotation    from './Quotation';
import NavBar       from './NavBar.js';

// Import Logo
const logo = require('./logo_fla_mod2_branco.png');

// Definition of styles to be used
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
    let history = useHistory();

    return(
        <div>
            <AppBar position="fixed" style={{background: '#3e5e3b', display:'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                {/* Toolbar style */}
                <Toolbar style={{position: 'relative', alignContent: 'center', justifyContent: 'center'}}>
                    <img src={logo} width='7%' height='7%' onClick={() => {history.push('/homepage')}} alt="Fail to load resource" />
                    <DropdownList />
                    <TextSearch />
                    <Quotation />
                    <FavoriteIcon className={classes.favButton} fontSize='large' />
                    <AccountCircleIcon className={classes.profileButton} fontSize='large'/>
                </Toolbar>
                <NavBar />
            </AppBar>
            
        </div>
    );
}