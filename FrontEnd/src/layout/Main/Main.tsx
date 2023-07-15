import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import {
    GlobalStyle,
    MainContainer,
Root,Footer
} from "./style";

const Main = () => {
    return (
        <Root>
            <GlobalStyle/>
            <Header title={"The Todo"} stack={"React"}/>
            <MainContainer>
                <Outlet />
            </MainContainer>
            <Footer/>
        </Root>
    );
};

export default Main;
