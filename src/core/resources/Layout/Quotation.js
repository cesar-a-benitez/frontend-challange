// Import Dependencies and Libraries
import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

// Import Icon
const dollarIcon = require('./icons/dollar-icon.png');

// Definition of Styles to be used
const defaultProps = {
    borderColor: 'white',
    m: 1,
    border: 1,
    style: { width: 130, height: 54 },
  };

const useStyles = makeStyles(theme => ({
    text: {
        position: 'relative',
        color: 'white',
        left: -113,
        top: 14
    },
    icon: {
        position: 'relative',
        color: 'white',
        left: -123,
        top: 18
    }
}));

export default function Quotation() {

    const classes = useStyles();

    return(
        <>
            <Box display="flex" justifyContent="center" >
                <Box borderRadius={6}{...defaultProps} />
                <div className={classes.icon}>
                    <img src={dollarIcon} width={30} height={30} alt="Fail to load resource" />
                </div>
                <div className={classes.text}>
                    <Typography variant="subtitle2">Cotação</Typography>
                    <Typography variant="subtitle2">U$ 4,22</Typography>
                </div>
            </Box>
        </>
    );
}
