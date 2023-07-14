import React, {useCallback, useState} from 'react';
import {
    Container2,
    DoneContainer,
    ButtonContainer,
    TitleContainer, TextArea
} from "./style";
import CustomButton from "../../components/CustomButton/CustomButton";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Write = () => {
    const [content, setContent] = useState<string | undefined>("");
    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };
    const update_Todo = useCallback(() => {

    }, [content]);
    return (
        <>
            <div>
                <h2>레시피 등록</h2>
            </div>
            <Form>
            <Container2>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>레시피 제목</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" style={{width: "600px"}}/>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>요리소개</Form.Label>
                        <Form.Control placeholder="1234 Main St" style={{width: "600px"}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>동영상 URL 주소</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" style={{width: "600px"}}/>
                    </Form.Group>
                    <Row className="mb-3 g-0 m-0">
                        <Form.Group as={Col} controlId="formGridState" className="text-start ">
                            <Form.Label>종류</Form.Label>
                            <Form.Select defaultValue="Choose..." style={{width: "160px"}}>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState" className="text-start">
                            <Form.Label>상황</Form.Label>
                            <Form.Select defaultValue="Choose..." style={{width: "160px"}}>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState" className="text-start">
                            <Form.Label>방법</Form.Label>
                            <Form.Select defaultValue="Choose..." style={{width: "160px"}}>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState" className="text-start">
                            <Form.Label>재료</Form.Label>
                            <Form.Select defaultValue="Choose..." style={{width: "160px"}}>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

            </Container2>
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
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>재료목록</Form.Label>
                            <Form.Control type="email" placeholder="재료1" style={{width: "250px"}}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료2" style={{width: "250px"}}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료3" style={{width: "250px"}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료4" style={{width: "250px"}}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료5" style={{width: "250px"}}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료6" style={{width: "250px"}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료7" style={{width: "250px"}}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료8" style={{width: "250px"}}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료9" style={{width: "250px"}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료10" style={{width: "250px"}}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료11" style={{width: "250px"}}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="재료12" style={{width: "250px"}}/>
                        </Form.Group>
                    </Row>
                </Container2>
            </Form>
        </>
    );
};

export default Write;
