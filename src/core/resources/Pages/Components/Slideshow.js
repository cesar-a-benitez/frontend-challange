import React, { Component } from 'react';
import LoadImages from '../../Images/LoadImages';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

let slideImages = [];
let imageList;

export default class Slideshow extends Component {

    constructor() {
        super();

        this.state= {
            slideItems: null,
            slideshowLength: 3
        }

        imageList = LoadImages();

        this.showSlideImages = this.showSlideImages.bind(this);
    }

    componentWillMount() {
        this.setState({slideItems: this.props.slideItems, slideshowLength: this.props.slideItems.length});
    }

    showSlideImages() {
        if(this.state.slideItems !== null) {
            this.state.slideItems.map((item) => {
                let imgPath = item.media_url;
                imageList.Banners.map((image, index) => {
                    if(image.name === imgPath) {
                        slideImages.push(
                            <MDBCarouselInner key={(index + 1)}>
                                <MDBCarouselItem itemId={(index +1)}>
                                    <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={image.image}
                                        alt="Fail to load"
                                        width={640}
                                        height={360}
                                    />
                                    </MDBView>
                                </MDBCarouselItem>
                            </MDBCarouselInner>
                        )
                    }
                })
            })
        } else {
            return <h1>Slide Images Null</h1>
        }
    }

    render() {
        this.showSlideImages();
        return(
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={this.state.slideshowLength}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    {slideImages}
                </MDBCarousel>
            </MDBContainer>
        );
    }
}