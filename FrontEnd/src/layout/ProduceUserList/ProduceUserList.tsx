import React from 'react';
import {Button, Carousel, Figure, Image} from "react-bootstrap";
import {LayOut} from "./style";
import {Container2} from "../../pages/Detail/style";
import UserCard from "./Components/UserCard";

const ProduceUserList = () => {
    return (
        <LayOut>
            <h3>Editor`s Pick BestUser</h3>
            <Carousel>
                <Carousel.Item>
                    <div style={{display:"flex"}}>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display:"flex"}}>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display:"flex"}}>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                        <div style={{width: "20%"}}>
                            <UserCard/>
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </LayOut>
    );
};

export default ProduceUserList;
