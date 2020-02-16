/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

class CarouselComponent extends React.Component {
    render() {
        return (
            <Carousel width="80%" showThumbs={false} infiniteLoop={true}>
                <div>
                    <img
                        alt="Carousel Image 1"
                        className="carousel-img"
                        height="460px"
                        src="images/Spot.jpg" width="400"height="400"
                    />
                </div>
                <div>
                    <img
                        alt="Carousel Image 2"
                        height="460px"
                        className="carousel-img"
                        src="images/Spot.jpeg"
                    />
                </div>
                <div>
                    <img
                        alt="Carousel Image 3"
                        height="460px"
                        className="carousel-img"
                        src="images/Demo1.jpeg"
                    />
                </div>
            </Carousel>
        );
    }
}

export default CarouselComponent;
