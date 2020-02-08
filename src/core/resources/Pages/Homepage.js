import React, { Component } from 'react';
import Slideshow from './Components/Slideshow';

import data from '../homepage.json';

let sectionHeader = data.sectionData.homePage.sliderItems;

export default class Homepage extends Component {

    constructor(){
        super();

        this.state = {
            darkMode: true,
            textColor: '#ffffff',
            bgColor:    '#3c403b'
        }
    }

    componentWillMount() {
        if (this.props.match.params.id === '0' || this.props.match.params.id === 'light') {
            console.log('disable dark mode')
            this.setState({darkMode: false, textColor:'black', bgColor: 'white'})
        }
    }
    
    render() {
        return(
            <div style={{paddingTop: 20, paddingBottom: 30, color: this.state.textColor, backgroundColor: this.state.bgColor}}>
                <h1>Homepage</h1>
                <Slideshow slideItems={sectionHeader} />
            </div>
        );
    }
}
