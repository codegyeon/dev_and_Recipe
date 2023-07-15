import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const WriteContainer3 = ({onChangeContent}) => {
    return (
        <Container2
            id="maincontent"
            style={{
                height: "400px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
            <Form.Group controlId="formGridEmail">
                <Form.Label>레시피</Form.Label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={12} style={{width: "95%", resize: "none"}}
                                  onChange={onChangeContent}/>
                </Form.Group>
            </Form.Group>
        </Container2>
    );
};

export default WriteContainer3;
