import React from 'react';
import { AppBar } from '@material-ui/core';
import Subscribe from './Subscribe';

export default function Footer() {
    return(
        <div>
            <AppBar position="static" style={{background: '#1ca342', display:'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                <Subscribe />
            </AppBar>
        </div>
    );
}