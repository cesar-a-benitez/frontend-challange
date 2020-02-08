// Import Dependencies and libraries
import React, { Component } from 'react';

// Import Components to be used
import ItemsCarousel from './Components/ItemsCarousel';
import HighlightItem from './Components/HighlightItem';
import Selector      from './Components/Selector';

import data from '../homepage.json';

let highlightItems = data.sectionData.homePage.highlightItems;
let offers = data.sectionData.homePage.offers;
let categories = data.sectionData.homePage.categories;
let phones = data.sectionData.homePage.phones;

// Definition of styles to be used
const styles = ({
    highlightItems: {
        flex: 1,
        position: 'relative',
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: '20%',
        paddingRight: '20%',
    },
    itemsCarousel: {
        position: 'relative',
        paddingTop: 40,
        paddingBottom: 60,
        paddingLeft: '20%',
        paddingRight: '20%',
        textAlign: 'left'
    }
  });

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
            this.setState({darkMode: false, textColor:'black', bgColor: 'white'})
        }
    }
    
    render() {
        return(
            <div style={{color: this.state.textColor, backgroundColor: this.state.bgColor}}>
                <div style={styles.highlightItems}>                
                    {/* <Slideshow slideItems={highlightItems} /> */}
                    <HighlightItem items={highlightItems} />
                </div>
                <div style={styles.itemsCarousel}>
                    <ItemsCarousel items={offers} style={styles.itemsCarousel}/>
                </div>
                <div style={styles.itemsCarousel}>
                    <Selector sectionName="EXPLORAR CATEGORIAS" items={categories} />
                    <div style={{paddingBottom: 60}} />
                    <Selector sectionName="CELULARES" items={phones} />
                </div>
            </div>
        );
    }
}
