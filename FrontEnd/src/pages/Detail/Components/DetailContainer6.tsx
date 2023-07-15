import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap"
import Button from "react-bootstrap/Button";

const DetailContainer6 = ({nickName, imageUrl}) => {
    return (
        <Container2
            id="maincontent"
            style={{
                minHeight: "200px",
                height: "200px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
            <Form>
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Comment</Form.Label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={4} style={{width: "97%", resize: "none"}}
                        />
                    </Form.Group>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container2>
    );
};

export default DetailContainer6;
