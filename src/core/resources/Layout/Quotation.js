import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Image } from 'react-bootstrap';

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

const dollarIcon = require('./icons/dollar-icon.png');

export default function Quotation() {

    const classes = useStyles();

    return(
        <>
            <Box display="flex" justifyContent="center" >
                <Box borderRadius={6}{...defaultProps} />
                <div className={classes.icon}>
                    <Image src={dollarIcon} width={30} height={30} styles={{tintColor: '#ffffff', color: '#ffffff'}} />
                </div>
                <div className={classes.text}>
                    <Typography variant="subtitle2">Cotação</Typography>
                    <Typography variant="subtitle2">U$ 4,22</Typography>
                </div>
            </Box>
        </>
    );
}
