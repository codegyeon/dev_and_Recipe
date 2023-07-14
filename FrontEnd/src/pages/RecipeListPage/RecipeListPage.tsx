import React from 'react';
import Banner from "../../layout/Banner/Banner";
import BestRecipeList from "../../layout/BestRecipeList/BestRecipeList";
import ProduceUserList from "../../layout/ProduceUserList/ProduceUserList";
import RecentlyRecipe from "../../layout/RecentlyRecipe/RecentlyRecipe";
import RecipeCategory from "../../layout/RecipeCategory/RecipeCategory";
import SuggestRecipeList from "../../layout/SuggestRecipeList/SuggestRecipeList";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeList from "../RecipeList/RecipeList";
import {RecipeContainer} from "./style";

const RecipeListPage = () => {
    return (
        <>
            <h1>리스트페이지</h1>
            <RecipeContainer>
                <RecipeList/>
            </RecipeContainer>
        </>
    );
};

export default RecipeListPage;
