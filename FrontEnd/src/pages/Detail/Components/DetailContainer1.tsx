import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap"

const DetailContainer1 = ({imageUrl,nickName,userProfileUrl,title,subtitle}) => {
    return (
        <Container2
            id="maincontent"
            style={{
                height: "820px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
            <div style={{position: 'relative', width: '60%', height: '50%', margin: '0 auto'}}>
                <Image
                    src={imageUrl ? imageUrl : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                    style={{width: '100%', height: '100%'}}
                    fluid
                />
                <Image
                    src={userProfileUrl ? userProfileUrl : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                    style={{position: 'absolute', bottom: '-10%', left: '42%', width: '15%', height: '25%', border: '5px solid white'}}
                    roundedCircle
                />
                <br/>
                <br/>
                <br/>
                <h2>{nickName? nickName : "CookingMaser"}</h2>
            </div>
        <div style={{marginTop:"100px"}}>
            <br/>
            <br/>
            <h2>{title? title : "대강 맛나보이는 음식이름 "}</h2>
            <br/>
            <h4 style={{textAlign:"center"}}>{subtitle? subtitle : "대강 맛있습니다 해먹으십셔"}</h4>
        </div>
        </Container2>
    );
};

export default DetailContainer1;
