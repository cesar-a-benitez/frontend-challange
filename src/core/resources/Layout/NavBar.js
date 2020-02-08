// Import Dependencies and Libraries
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Button, makeStyles, Typography, Grid } from '@material-ui/core';

// Icons import
import GroupIcon from '@material-ui/icons/Group';
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
        padding: theme.spacing(0, .5, 0, 0),
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

const links = [ '/categories',
                '/games',
                '/cellphones-tablets',
                '/informatics',
                '/receivers',
                '/eletronics',
                '/eletrodomestics',
                '/sports',
                '/health'];

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
    let history = useHistory();

    function redirect(path) {
        history.push(path);
    }

    const mapButtons = 
        btns.map((button, index) => 
            <Grid item xs={"auto"} key={index}>
                <Button className={classes.button} key={index} size='large' onClick={() => {redirect(links[index])}} >
                    <img src={icons[index]} className={classes.icons} alt="Fail to load resource"/>
                    <Typography variant="caption" className={classes.buttonText}>{button}</Typography>
                </Button>
            </Grid>
        );
    

    return(
        <AppBar position="static" style={{background: '#3e5e3b', display:'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}} >
            <Grid container spacing={0} direction='row' justify='center' alignItems='center' >
                <React.Fragment>
                    {mapButtons}
                    <Grid item xs={"auto"} key={"vendedores"}>
                        <Button className={classes.button} key={"vendedores"} size='large' onClick={() => {redirect('/sellers')}} ><GroupIcon />
                            <Typography variant="caption" className={classes.buttonText}>Vendedores</Typography>
                        </Button>
                    </Grid>
                </React.Fragment>
            </Grid>
        </AppBar>
    );
} 

