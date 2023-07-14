import React from 'react';
import Card from 'react-bootstrap/Card';

const RecipeCard = ({imageUrl}) => {
    return (
        <>
            <Card style={{width:"300px",height:"400px",display:"inline-block",margin:"20px"}}>
                <Card.Img variant="top" src={imageUrl} style={{width:"300px"}} />
                <Card.Body>
                    <Card.Title>대충 맛있는 요리 이름</Card.Title>
                    <Card.Text>
                        이렇게 저렇게 요리하면 돼.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default RecipeCard;
