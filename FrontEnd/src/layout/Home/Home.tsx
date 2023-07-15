import React from 'react';
import Banner from "../Banner/Banner";
import BestRecipeList from "../BestRecipeList/BestRecipeList";
import ProduceUserList from "../ProduceUserList/ProduceUserList";
import RecentlyRecipe from "../RecentlyRecipe/RecentlyRecipe";
import RecipeCategory from "../RecipeCategory/RecipeCategory";
import SuggestRecipeList from "../SuggestRecipeList/SuggestRecipeList";

const Home = () => {
    return (
        <>
            <Banner/>
            <BestRecipeList/>
            <ProduceUserList/>
            <RecentlyRecipe/>
            <SuggestRecipeList/>
        </>
    );
};

export default Home;
