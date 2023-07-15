import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap"

const DetailContainer3 = ({idx,content,imageUrl}) => {
    return (
        <Container2
            id="maincontent"
            style={{
                minHeight: "200px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
        <div style={{margin:"30px"}}>
            <h3 >{content? content : `STEP${idx? idx: 1} 돼지고기는 적당한 크기로 잘라줍니다.`}</h3>
            <Image
                src={imageUrl ? imageUrl : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                style={{width: '30%', height: '100%'}}
                fluid
            />
        </div>
        </Container2>
    );
};

export default DetailContainer3;
