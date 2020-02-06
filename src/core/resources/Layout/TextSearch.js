import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { InputBase } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 1),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.85),
      },
      margin: theme.spacing(2),
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

export default function TextSearch() {

    const classes = useStyles();

    return(
        <>
            {/* <Form>
            <Form inline>
                    <FormControl type="text" placeholder="O que está procurando?" className="mr-sm-2" size='lg' />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Form> */}
            <div className={classes.search}>
                <InputBase
                    placeholder="O que esta procurando?"
                    classes={{
                        root:   classes.inputRoot,
                        input:  classes.inputInput
                    }}
                    inputProps={{'aria-label': 'search'}}
                />
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
            </div>
            
        </>
    );
}