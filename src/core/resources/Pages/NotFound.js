import React from 'react';

export default function NotFound(props) {
    return(
        <div style={{display: 'flex', height: 580, alignItems: 'center', alignContent: 'center', justifyContent: 'center', verticalAlign: 'center',
                    color: '#ffffff', backgroundColor: '#3c403b'}}>
        
            <h1>Error 404: Page {props.match.params.page} not found.</h1>
        </div>
    );
}
