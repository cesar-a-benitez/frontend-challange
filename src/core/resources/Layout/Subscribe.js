import React from 'react';
import { Box, Typography, InputBase, Container } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { Col, Row } from 'react-bootstrap';

const defaultProps = {
    borderColor: 'white',
    m: 1,
    border: 0,
    style: { width: 130, height: 100 },
  };

const useStyles = makeStyles(theme => ({
    text: {
        position: 'relative',
        color: '#3e5e3b',
        left: -113,
        top: 20,
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
        top: 9,
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
        padding: theme.spacing(2.4, 1, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 580,
        },
      },
}));

export default function Subscribe(){

    const classes = useStyles();

    return(
        <Container>
            <Row>
                <Col>
                    <Box display="flex" justifyContent="center" >
                        <Box borderRadius={6}{...defaultProps} />
                        <div className={classes.icon}>
                        </div>
                        <div className={classes.text}>
                            <Typography variant="h6">RECEBA OFERTAS</Typography>
                            <Typography variant="h6">ESPECIAIS NO SEU EMAIL</Typography>
                        </div>
                    </Box>
                </Col>
                <Col>
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
                </Col>
            </Row>
        </Container>
    );
}