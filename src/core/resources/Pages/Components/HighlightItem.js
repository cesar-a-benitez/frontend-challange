// Import Dependencies and libraries
import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import images
import LoadImages from '../../Images/LoadImages';

// Creating Variables to be used
let itemsList = [];
let imageList;

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
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
                            <Card style={{maxWidth: 1135}} key={index}>
                                <CardActionArea>
                                    <CardMedia style={{height: 360}}
                                      image={image.image}
                                      />
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
                    arrows={true}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
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