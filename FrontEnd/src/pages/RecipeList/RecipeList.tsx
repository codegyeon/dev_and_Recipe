import React from 'react';
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import {useSelector} from "react-redux";
import {RootState} from "../../type/local";

const RecipeList = () => {
        const {recipes} = useSelector((state:RootState)=>(state.recipes))
        console.log(recipes)
    return (
        <>
            <RecipeCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
            <RecipeCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
            <RecipeCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                {recipes?.map((recipe) =>
                    <RecipeCard key={recipe.title} title={recipe.title} subtitle={recipe.subtitle}/>
                )}
        </>
    );
};

export default RecipeList;
