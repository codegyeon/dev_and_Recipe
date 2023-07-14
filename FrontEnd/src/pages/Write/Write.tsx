import React, {useCallback, useState} from 'react';
import {  Container2,
    DoneContainer,
    ButtonContainer,
    TitleContainer,TextArea } from "./style";
import CustomButton from "../../components/CustomButton/CustomButton";


const Write = () => {
    const [content, setContent] = useState<string | undefined>("");
    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };
    const update_Todo = useCallback(() => {

    }, [ content]);
    return (
        <>
            <h1>레시피 등록</h1>
            <div
                id="maincontent"
                style={{
                    height:"300px",
                    backgroundColor: "white",
                    margin: "20px",
                    padding:"20px"
                }}
            >

            </div>
        </>
    );
};

export default Write;
