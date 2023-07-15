import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const WriteContainer2 = ({ingredients,onChangeIngredients}) => {
    return (
        <Container2
            id="maincontent"
            style={{
                height: "300px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
            <Row className="mb-3">
                {ingredients.map((ingredient, index) => (
                    <Form.Group as={Col} controlId={`formGridIngredient${index}`} key={index}>
                        <Form.Label>{index === 0 ? "재료목록" : " "}</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={`재료${index + 1}`}
                            style={{width: "250px"}}
                            value={ingredient}
                            onChange={(e) => onChangeIngredients(e, index)}
                        />
                    </Form.Group>
                ))}
            </Row>
        </Container2>
    );
};

export default WriteContainer2;
