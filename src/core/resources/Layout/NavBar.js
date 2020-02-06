// Import Dependencies and Libraries
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Button, makeStyles, Typography } from '@material-ui/core';

// Icons import
const categories        = require('./icons/shape.png');
const games             = require('./icons/controller-classic.png');
const phone             = require('./icons/phone.png');
const computer          = require('./icons/laptop.png');
const receiver          = require('./icons/television.png');
const eletronics        = require('./icons/gear.png');
const eletrodomestics   = require('./icons/washing-machine.png');
const sports            = require('./icons/basketball.png');
const health            = require('./icons/shower-head.png');

const useStyles = makeStyles(theme => ({
    button: {
        color: 'white'
    },
    icons: {
        color: 'white',
        padding: theme.spacing(0, .5, 0, .5),
        height: 15,
        width: 22
    },
    buttonText: {
        fontSize: 11
    }
}));

const btns = [  'Categorias',
                'Games',
                'Celulares e Tablets',
                'Informática',
                'Receptores',
                'Eletrônicos',
                'Eletrodomésticos',
                'Esporte e Lazer',
                'Saúde e Beleza']; 

const icons = [ categories,
                games,
                phone,
                computer,
                receiver,
                eletronics,
                eletrodomestics,
                sports,
                health];

export default function NavBar(){

    const classes = useStyles();

    const mapButtons = 
        btns.map((button, index) => 
                <Button className={classes.button} key={index} ><img src={icons[index]} className={classes.icons} /><Typography variant="caption" className={classes.buttonText}>{button}</Typography></Button>
        );
    

    return(
        <Navbar position="static" style={{background: '#3e5e3b', display:'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}} >
            {mapButtons}
        </Navbar>
    );
} 