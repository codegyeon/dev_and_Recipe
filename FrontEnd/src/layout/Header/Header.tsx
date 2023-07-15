import {
    Container,
    SearchContainer,
    NavContainer,
    SearchInput,
    SearchButton,
    SearchForm
} from "./style";
import {useCallback} from "react";
import useInput from "../../hooks/useInput";
import {FaSearch} from "react-icons/fa";
import {Image} from "react-bootstrap"
import Logo from "../../public/Logo.png"
import {Link} from "react-router-dom";

const Header = () => {
    const submitSearch = useCallback((e) => {
        e.preventDefault();
        setKeyword('')
    }, [])
    const [keyword, onKeyword, setKeyword] = useInput('')
    return (
        <Container>
            <SearchContainer>
                <a href="/">
                    <Image src={Logo} style={{width: "200px"}}/>
                </a>
                <SearchForm onSubmit={submitSearch}>
                    <SearchInput value={keyword} onChange={onKeyword}/>
                    <SearchButton>
                        <FaSearch/>
                    </SearchButton>
                </SearchForm>
                <Link to={'/Write'}>
                    <Image src="https://recipe1.ezmember.co.kr/img/tmn_write.png" roundedCircle/>
                </Link>
            </SearchContainer>
            <NavContainer>
                <Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} to="/">
                    MAIN
                </Link>
                <Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} to="/RecipeList">
                    RECIPE LIST
                </Link>
                <Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} to="/RecipeRanking">
                    RECIPE RANKING
                </Link>
                <Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} to="/Mypage">
                    MYPAGE
                </Link>
                <Link style={{margin: "auto", fontWeight: "bold", padding: "10px"}} to="/Login">
                    LOGIN/LOGOUT
                </Link>
            </NavContainer>
        </Container>
    );
};

export default Header;
