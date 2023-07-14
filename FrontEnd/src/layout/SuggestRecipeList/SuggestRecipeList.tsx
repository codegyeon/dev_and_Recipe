import React from 'react';
import {Carousel} from "react-bootstrap";

const SuggestRecipeList = () => {
    return (
        <div
            id="maincontent"
            style={{
                height:"300px",
                backgroundColor: "floralwhite",
                margin: "20px",
                padding:"20px"
            }}
        >
            <h3>최근에 본 레시피</h3>
            <Carousel>
                <Carousel.Item>
                    <div style={{display:"flex"}}>
                        <div style={{width: "33.33%"}}>
                            <img
                                className="d-block"
                                src="https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
                                alt="First slide"
                                style={{height:"200px"}}
                            />
                            <h4>어쩌구 저쩌구</h4>
                        </div>
                        <div style={{width: "33.33%"}}>
                            <img
                                className="d-block"
                                src="https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
                                alt="First slide"
                                style={{height:"200px"}}
                            />
                            <h4>어쩌구 저쩌구</h4>
                        </div>
                        <div style={{width: "33.33%"}}>
                            <img
                                className="d-block"
                                src="https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
                                alt="First slide"
                                style={{height:"200px"}}
                            />
                            <h4>어쩌구 저쩌구</h4>
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display:"flex"}}>
                        <div style={{width: "33.33%"}}>
                            <img
                                className="d-block"
                                src="https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
                                alt="First slide"
                                style={{height:"200px"}}
                            />
                            <h4>어쩌구 저쩌구</h4>
                        </div>
                        <div style={{width: "33.33%"}}>
                            <img
                                className="d-block"
                                src="https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
                                alt="First slide"
                                style={{height:"200px"}}
                            />
                            <h4>어쩌구 저쩌구</h4>
                        </div>
                        <div style={{width: "33.33%"}}>
                            <img
                                className="d-block"
                                src="https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
                                alt="First slide"
                                style={{height:"200px"}}
                            />
                            <h4>어쩌구 저쩌구</h4>
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display:"flex"}}>
                        <div style={{width: "33.33%"}}>
                            <img
                                className="d-block"
                                src="https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
                                alt="First slide"
                                style={{height:"200px"}}
                            />
                            <h4>어쩌구 저쩌구</h4>
                        </div>
                        <div style={{width: "33.33%"}}>
                            <img
                                className="d-block"
                                src="https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
                                alt="First slide"
                                style={{height:"200px"}}
                            />
                            <h4>어쩌구 저쩌구</h4>
                        </div>
                        <div style={{width: "33.33%"}}>
                            <img
                                className="d-block"
                                src="https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"
                                alt="First slide"
                                style={{height:"200px"}}
                            />
                            <h4>어쩌구 저쩌구</h4>
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SuggestRecipeList;
