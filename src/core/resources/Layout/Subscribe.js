// Import Dependencies and Libraries
import React from 'react';
import { Grid, InputBase } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';

// Import Icon
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

// Definition of styles to be used
const useStyles = makeStyles(theme => ({
    text: {
        position: 'relative',
        color: '#3e5e3b',
        textAlign: 'left',
        left: 0,
        top: 5,
    },
    icon: {
        position: 'relative',
        color: 'white',
        left: -123,
        top: 18
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 1),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.85),
        },
        margin: theme.spacing(2),
        top: 6,
        height: 54,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(0),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(1, 1, 1, 7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '4%',
        right: '3%',
        color: 'black'
      },
      inputRoot: {
        color: 'black',
      },
      inputInput: {
        fontSize: 20,
        padding: theme.spacing(2.4, 7, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 800,
        },
      },
}));

export default function Subscribe(){

    const classes = useStyles();

    return(
        <Grid container spacing={1} direction='row' justify='center' alignItems='center'>
            <React.Fragment>
                <Grid item xs={2}>
                    <div className={classes.text}>
                        <h5><b>RECEBA OFERTAS</b></h5>
                        <h5><b>ESPECIAIS NO SEU EMAIL</b></h5>
                    </div>
                </Grid>
                <Grid item xs={"auto"}>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Digite seu email aqui!"
                            classes={{
                                root:   classes.inputRoot,
                                input:  classes.inputInput
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                        <div className={classes.searchIcon}>
                            <ThumbUpAltIcon />
                        </div>
                    </div>
                </Grid>
            </React.Fragment>
        </Grid>
    );
}