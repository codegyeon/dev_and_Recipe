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
import useInput from "../../hooks/useInput";
import useArrayInput from "../../hooks/useArrayInput";
import CategoryBox from "./Components/CategoryBox";
import UploadImageBox from "./Components/UploadImageBox";
import WriteContainer1 from "./Components/WriteContainer1";
import WriteContainer2 from "./Components/WriteContainer2";
import WriteContainer3 from "./Components/WriteContainer3";
import WriteContainer4 from "./Components/WriteContainer4";


const Write = () => {
    const [title, onChangeTitle] = useInput<string | undefined>("");
    const [subtitle, onChangeSubtitle] = useInput<string | undefined>("");
    const [url, onChangeUrl] = useInput<string | undefined>("");
    const [category1, onChangeCategory1] = useInput<number | undefined>(1);
    const [category2, onChangeCategory2] = useInput<number | undefined>(1);
    const [category3, onChangeCategory3] = useInput<number | undefined>(1);
    const [category4, onChangeCategory4] = useInput<number | undefined>(1);
    const [ingredients, onChangeIngredients] = useArrayInput(["", "", "", "", "", "", "", "", "", "", "", ""]);
    const [content, onChangeContent] = useInput<string | undefined>("");
    const [tip, onChangeTip] = useInput<string | undefined>("");
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(title, subtitle, url, category1, category2, category3, category4, ingredients, content, tip)
        const formData = new FormData();
        formData.append('image', file);
    };
    return (
        <>
            <div>
                <h2>레시피 등록</h2>
            </div>
            <Form onSubmit={onSubmit}>
                <WriteContainer1 preview={preview} onFileChange={onFileChange} onChangeCategory1={onChangeCategory1}
                                 onChangeCategory2={onChangeCategory2} onChangeCategory3={onChangeCategory3}
                                 onChangeCategory4={onChangeCategory4} onChangeSubtitle={onChangeSubtitle}
                                 onChangeTitle={onChangeTitle} onChangeUrl={onChangeUrl}/>
                <WriteContainer2 ingredients={ingredients} onChangeIngredients={onChangeIngredients}/>
                <WriteContainer3 onChangeContent={onChangeContent}/>
                <WriteContainer4 onChangeTip={onChangeTip}/>
            </Form>
        </>
    );
};

export default Write;
