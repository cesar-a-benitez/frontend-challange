import React, { Component } from 'react'
import { Typography, Grid, Card, CardActionArea, CardMedia } from '@material-ui/core';

import LoadImages from '../../Images/LoadImages';

let itemsList;
let imageList;

export default class Selector extends Component {
    
    constructor() {
        super();

        this.state= {
            items: null,
            itemsLenght: 4
        }

        imageList = LoadImages();

        this.showItemsList = this.showItemsList.bind(this);
    }

    componentWillMount() {
        try {
            this.setState({items: this.props.items, itemsLenght: this.props.items.length});
        }catch (e) {
            console.log(e);
        }

        itemsList = [];
    }

    showItemsList() {
        if(this.state.items !== null) {
            this.state.items.map((item) => {
                let itemImage = item.media_url;
                imageList.Banners.map((image, index) => {
                    if(image.name === itemImage) {
                        itemsList.push(
                                <Grid item xs={"auto"} key={(this.props.sectionName + index)}>
                                    <Card style={{width: 170}}>
                                        <CardActionArea>
                                            <CardMedia style={{height: 200, paddingLeft: 10, paddingRight: 10}} image={image.image} />
                                        </CardActionArea>
                                    </Card>
                                    <Typography variant="h6" color="inherit">{item.name}</Typography>
                                </Grid>
                        )
                    }
                    return 0
                })
                return 0
            })
            return itemsList;
        } else {
            return <h1>Slide Images Null</h1>
        }
    }

    render() {
        if (this.state.items !== null && this.state.items !== undefined && this.state.itemsLenght > 0) {
            return(
                <div>
                    <Typography variant="h4" align="left">{this.props.sectionName}</Typography>
                    <React.Fragment>
                        <Grid container spacing={1} variant="row">
                            {this.showItemsList()}
                    </Grid>
                    </React.Fragment>
                </div>
            );
        } else {
            return (<div />);
        }
    }
}