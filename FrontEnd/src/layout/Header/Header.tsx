import {
  Container,
  Logo,
  Logo2,
  ProfilePicture,
  ProfilePicture2,
    SearchContainer,
    NavContainer,
    SearchInput,
    SearchButton,
    SearchForm
} from "./style";
import {useCallback} from "react";
import useInput from "../../hooks/useInput";
import {FaSearch} from "react-icons/fa";

interface HeaderProps {
  title: string | null;
  stack: string | null;
}

const Header = ({ title, stack }: HeaderProps) => {
  const submitSearch = useCallback((e)=>{
    e.preventDefault();

    setKeyword('')
  },[])
  const [keyword,onKeyword,setKeyword] = useInput('')
  return (
    <Container>
      <SearchContainer>
        <SearchForm onSubmit={submitSearch}>
          <SearchInput value={keyword} onChange={onKeyword} />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchForm>
      </SearchContainer>
      <NavContainer>
        <a href="/">메인메뉴</a>
        <a href="/RecipeList">레시피 보기</a>
        <a href="/RecipeRanking">레시피 랭킹</a>
        <a href="/Mypage">마이페이지</a>
        <a href="#">로그인/로그아웃</a>
      </NavContainer>
    </Container>
  );
};

export default Header;
