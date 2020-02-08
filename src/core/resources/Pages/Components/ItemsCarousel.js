// Importing Dependencies and libraries
import React, { Component } from 'react';
import LoadImages from '../../Images/LoadImages';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

// Declaring variables to be used
let itemsList = [];
let imageList;

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };


export default class Slideshow extends Component {

    constructor() {
        super();

        this.state= {
            slideItems: null,
            slideshowLength: 4
        }

        imageList = LoadImages();

        this.showitemsList = this.showitemsList.bind(this);
    }

    componentWillMount() {
        try {
            this.setState({slideItems: this.props.items, slideshowLength: this.props.items.length});
        }catch (e) {
            console.log(e);
        }
    }

    showitemsList() {
        if(this.state.slideItems !== null) {
            this.state.slideItems.map((item) => {
                let itemImage = item.media_url;
                imageList.Banners.map((image, index) => {
                    if(image.name === itemImage) {
                        itemsList.push(
                        <div key={index}>
                            <Card style={{maxWidth: 180}} key={index}>
                                <CardActions>
                                    <Button size='small' color='inherit' style={{position: 'relative', paddingLeft: '80%'}}>
                                        <FavoriteBorderIcon />
                                    </Button>
                                </CardActions>
                                <CardActionArea>
                                    <CardMedia style={{height: 150}}
                                      image={image.image}
                                      />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            {item.price}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        )
                    }
                    return 0
                })
                return 0
            })
        } else {
            return <h1>Slide Images Null</h1>
        }
    }

    render() {
        if(this.state.slideItems !== null && this.state.slideItems !== undefined && this.state.slideItems.length > 0){
            this.showitemsList();
            return(
                <Carousel
                    arrows={false}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    renderArrowsOutside={true}
                    renderDotsOutside={true}
                    infinite={true}
                    autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    width={500}
                    height={360}
                    >
                        {itemsList}
                </Carousel>
            );
        } else {
            return(
                <div />
            );
        }
    }
        
}