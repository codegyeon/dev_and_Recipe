import {
    Container,

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
import {Image} from "react-bootstrap"
import Logo from "../../../public/Logo.png"
import {Link, useNavigate} from "react-router-dom";

interface HeaderProps {
    title: string | null;
    stack: string | null;
}

const Header = ({title, stack}: HeaderProps) => {
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
                    <Image src="https://recipe1.ezmember.co.kr/img/tmn_write.png" roundedCirclev/>
                </Link>
            </SearchContainer>
            <NavContainer>
                <Link style={{margin: "auto"}} to="/">
                    <a style={{fontWeight: "bold", padding: "10px"}}>MAIN</a>
                </Link>
                <Link style={{margin: "auto"}} to="/RecipeList">
                    <a style={{fontWeight: "bold", padding: "10px"}}>RECIPE LIST</a>
                </Link>
                <Link style={{margin: "auto"}} to="/RecipeRanking">
                    <a style={{fontWeight: "bold", padding: "10px"}}>RECIPE RANKING</a>
                </Link>
                <Link style={{margin: "auto"}} to="/Mypage">
                    <a style={{fontWeight: "bold", padding: "10px"}}>MYPAGE</a>
                </Link>
                <Link style={{margin: "auto"}} to="/Login">
                    <a style={{fontWeight: "bold", padding: "10px"}}>LOGIN/LOGOUT</a>
                </Link>
            </NavContainer>
        </Container>
    );
};

export default Header;
