import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import useInput from "../../hooks/useInput";
import useArrayInput from "../../hooks/useArrayInput";
import WriteContainer1 from "./Components/WriteContainer1";
import WriteContainer2 from "./Components/WriteContainer2";
import WriteContainer3 from "./Components/WriteContainer3";
import WriteContainer4 from "./Components/WriteContainer4";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ADD_RECIPE} from "../../redux/reducers/recipeSlice";

const Write = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title, onChangeTitle] = useInput<string | undefined>("");
    const [subtitle, onChangeSubtitle] = useInput<string | undefined>("");
    const [url, onChangeUrl] = useInput<string | undefined>("");
    const [category1, onChangeCategory1] = useInput<number | undefined>(1);
    const [category2, onChangeCategory2] = useInput<number | undefined>(1);
    const [category3, onChangeCategory3] = useInput<number | undefined>(1);
    const [category4, onChangeCategory4] = useInput<number | undefined>(1);
    const [ingredients, onChangeIngredients] = useArrayInput(["", "", "", "", "", "", "", "", "", "", "", ""]);
    const [contentArr, onChangeContentArr, setContentArr] = useArrayInput(["",]);
    const [content, onChangeContent] = useInput<string | undefined>("");
    const [tip, onChangeTip] = useInput<string | undefined>("");
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>(null);

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file||'');
        formData.append('title', title || '');
        formData.append('subtitle', subtitle || '');
        formData.append('category1', String(category1));
        formData.append('category2', String(category2));
        formData.append('category3', String(category3));
        formData.append('category4', String(category4));
        formData.append('ingredients', JSON.stringify(ingredients));
        formData.append('content', content || '');
        formData.append('tip', tip || '');
        formData.append('url', url || '');

        const newRecipe = {
            title,subtitle,category1,category2,category3,category4,content,tip,url,ingredients
        }
        dispatch(ADD_RECIPE(newRecipe))
        alert("성공적으로 등록 되었습니다!")
        navigate("/")
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
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
