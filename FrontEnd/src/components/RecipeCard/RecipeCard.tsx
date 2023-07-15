import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

const RecipeCard = ({imageUrl,title,subtitle,style}) => {
    return (
        <>
            <Link to={'/Detail'}>
            <Card style={style? style : {width:"300px",height:"400px",display:"inline-block",margin:"20px"}}>
                <Card.Img variant="top" src={imageUrl? imageUrl : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"} style={{width:"300px"}} />
                <Card.Body>
                    <Card.Title>{title ? title : "대강 맛있는 요리 이름"}</Card.Title>
                    <Card.Text>
                        {subtitle ? subtitle : "이렇게 저렇게 요리하면 돼."}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </>
    );
};

export default RecipeCard;
