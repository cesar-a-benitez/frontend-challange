// Import Dependencies and Libraries
import React        from 'react';
import { AppBar }   from '@material-ui/core';
import Subscribe    from './Subscribe';
import BottomLinks  from './BottomLinks';

export default function Footer() {
    return(
        <div>
            <AppBar position="static" style={{background: '#1ca342', display:'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                <Subscribe />
            </AppBar>
            <AppBar position="static" style={{background: '#3e5e3b', display:'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                <BottomLinks />
            </AppBar>
        </div>
    );
}