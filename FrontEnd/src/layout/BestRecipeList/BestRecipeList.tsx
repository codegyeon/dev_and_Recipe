import React from 'react';
import {Carousel} from "react-bootstrap";
import {LayOut} from "./style";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const BestRecipeList = () => {
    return (
        <LayOut
        >
            <h3>코딩너무재밌어`s BEST Recipe</h3>
            <Carousel>
                <Carousel.Item>
                    <div style={{display:"flex"}}>
                        <div style={{width: "33.33%"}}>
                            <RecipeCard />
                        </div>
                        <div style={{width: "33.33%"}}>
                            <RecipeCard />
                        </div>
                        <div style={{width: "33.33%"}}>
                            <RecipeCard />
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display:"flex"}}>
                        <div style={{width: "33.33%"}}>
                            <RecipeCard />
                        </div>
                        <div style={{width: "33.33%"}}>
                            <RecipeCard />
                        </div>
                        <div style={{width: "33.33%"}}>
                            <RecipeCard />
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{display:"flex"}}>
                        <div style={{width: "33.33%"}}>
                            <RecipeCard />
                        </div>
                        <div style={{width: "33.33%"}}>
                            <RecipeCard />
                        </div>
                        <div style={{width: "33.33%"}}>
                            <RecipeCard />
                        </div>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </LayOut>
    );
};

export default BestRecipeList;
