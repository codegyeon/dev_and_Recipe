import React from 'react';
import {Carousel} from "react-bootstrap";
import {LayOut} from "./style";
import RecentCard from "../RecentlyRecipe/Components/RecentCard";

const SuggestRecipeList = () => {
    return (
        <>
            <h2>Suggest Recipe</h2>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <div style={{display: "flex",justifyContent:"center",alignItems:"center"}}>
                                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{display: "flex",justifyContent:"center",alignItems:"center"}}>
                            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{display: "flex",justifyContent:"center",alignItems:"center"}}>
                            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                        </div>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </>
    );
};

export default SuggestRecipeList;
