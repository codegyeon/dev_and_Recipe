import React from 'react';
import Form from "react-bootstrap/Form";

const UploadImageBox = ({preview,onFileChange}) => {
    return (
        <>
            <Form.Group controlId="formFileSm" className="mb-3" style={{width:"35%",marginTop:"20px"}}>
                <Form.Label>레시피 대표 이미지</Form.Label>
                <Form.Control type="file" size="sm" onChange={onFileChange}/>
                {preview && <img src={preview} alt="Image preview" style={{width: "40%", height: "auto",margin:"20px"}}/>}
            </Form.Group>
        </>
    );
};

export default UploadImageBox;
