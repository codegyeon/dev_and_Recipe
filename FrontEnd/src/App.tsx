import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./layout/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import Home from "./layout/Home/Home";
import RecipeListPage from "./pages/RecipeListPage/RecipeListPage";
import RecipeRankingPage from "./pages/RecipeRankingPage/RecipeRankingPage";
import Mypage from "./pages/Mypage/Mypage";
import Write from "./pages/Write/Write";

const queryClient: QueryClient = new QueryClient();

const App: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} /> {/* "Home" 컴포넌트는 메인 페이지에 해당하는 컴포넌트를 의미합니다. */}
                        <Route path="/Detail" element={<Detail />} />
                        <Route path="/RecipeList" element={<RecipeListPage />} />
                        <Route path="/RecipeRanking" element={<RecipeRankingPage />} />
                        <Route path="/Mypage" element={<Mypage />} />
                        <Route path="/Write" element={<Write />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/SignUp" element={<SignUp />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
