import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";
import {LayOut} from "./style";

const Banner = () => {
    return (
        <LayOut
        >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/1200x/5e/e1/18/5ee1185eb838d81fa950e2915b236150.jpg"
                        alt="First slide"
                        style={{height:"200px"}}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://vrthumb.imagetoday.co.kr/2022/01/07/ti155t001018.jpg"
                        alt="Second slide"
                        style={{height:"200px"}}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-vector/hand-drawn-japanese-food-twitter-banner-template_23-2149031414.jpg?w=2000"
                        alt="Third slide"
                        style={{height:"200px"}}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </LayOut>
    );
};

export default Banner;
