import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap"

const DetailContainer2 = ({material}) => {
    return (
        <Container2
            id="maincontent"
            style={{
                height: "320px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
        <div style={{margin:"30px"}}>
            <h2>[재료]</h2>
            <h4 style={{textAlign:"center"}}>돼지고기 1근</h4>
            <h4 style={{textAlign:"center"}}>양파 2개</h4>
            <h4 style={{textAlign:"center"}}>피망 1개</h4>
            <h4 style={{textAlign:"center"}}>당근 1개</h4>
            <h4 style={{textAlign:"center"}}>가지 2개</h4>
            <h4 style={{textAlign:"center"}}>고추가루 5큰술</h4>
            <h4 style={{textAlign:"center"}}>설탕 3큰술</h4>
        </div>
        </Container2>
    );
};

export default DetailContainer2;
