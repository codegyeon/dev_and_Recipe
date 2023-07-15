import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap"

const DetailContainer4 = ({nickName,imageUrl}) => {
    return (
        <Container2
            id="maincontent"
            style={{
                minHeight: "200px",
                height:"200px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
            <h3>Recipe Writer</h3>
        <div style={{margin:"20px", display:"inline-flex",height:"inherit"}}>
            <Image
                src={imageUrl ? imageUrl : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                style={{width: '10%', height: '80%',margin:"10px"}}
                roundedCircle
            />
            <div>
                <h3 >{nickName ? nickName : "CookingMaster"}</h3>
                <a>열심히 삽니다</a>
            </div>
        </div>
        </Container2>
    );
};

export default DetailContainer4;
