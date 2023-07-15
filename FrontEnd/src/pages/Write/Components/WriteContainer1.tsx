import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import CategoryBox from "./CategoryBox";
import UploadImageBox from "./UploadImageBox";

const WriteContainer1 = ({onChangeTitle,onChangeSubtitle,onChangeUrl,onChangeCategory1,onChangeCategory2,onChangeCategory3,onChangeCategory4,onFileChange,preview}) => {
    return (
        <Container2
            id="maincontent"
            style={{
                height: "620px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridRecipeName">
                    <Form.Label>레시피 제목</Form.Label>
                    <Form.Control placeholder="" style={{width: "600px"}} onChange={onChangeTitle}/>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridRecipeContent">
                <Form.Label>요리소개</Form.Label>
                <Form.Control placeholder="" style={{width: "600px"}} onChange={onChangeSubtitle}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridRecipeUrl">
                <Form.Label>동영상 URL 주소</Form.Label>
                <Form.Control placeholder="" style={{width: "600px"}} onChange={onChangeUrl}/>
            </Form.Group>
            <Row className="mb-3 g-0 m-0">
                <CategoryBox method1={onChangeCategory1} method2={onChangeCategory2} method3={onChangeCategory3} method4={onChangeCategory4}/>
                <UploadImageBox onFileChange={onFileChange} preview={preview} />
            </Row>
        </Container2>
    );
};

export default WriteContainer1;
