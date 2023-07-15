import styled, { keyframes } from "styled-components";

export const Button = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;


export const Container = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: grid;
  //grid-template-columns: 6fr 4fr;
  weight: 100%;
  grid-template-rows: 70% 30%;
  height: 150px;
  
`;

export const SearchContainer = styled.div`
  background-color: ghostwhite;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; // 가운데 정렬 유지
  padding: 0.5em;
  width: 58%;
  margin: auto;
`;

export const SearchInput = styled.input`
  width: 40%;
  padding: 0.5em;
  font-size: 1em;
`;

export const SearchForm = styled.form`
  display: flex;
  width: 50%;
`;

export const SearchButton = styled.button`
  width: 15%;
  font-size: 1em;
  border: 1px solid;
  background: none;
  background-color: whitesmoke;
  justify-content: flex-end;
`;

export const NavContainer = styled.div`
  background-color: black;
  height: 100%;
  padding: 0 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    text-decoration: none;
    color: white;
  }
`;

const move = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const shimmer = keyframes`
  0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5), 0 0 20px rgba(0, 186, 255, 0.5), 0 0 35px rgba(0, 186, 255, 0.5), 0 0 40px rgba(0, 186, 255, 0.5), 0 0 50px rgba(0, 186, 255, 0.5), 0 0 75px rgba(0, 186, 255, 0.5); }
  50% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 186, 255, 0.5), 0 0 20px rgba(0, 186, 255, 0.5), 0 0 25px rgba(0, 186, 255, 0.5), 0 0 30px rgba(0, 186, 255, 0.5), 0 0 35px rgba(0, 186, 255, 0.5), 0 0 45px rgba(0, 186, 255, 0.5), 0 0 50px rgba(0, 186, 255, 0.5); }
  100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5), 0 0 20px rgba(0, 186, 255, 0.5), 0 0 35px rgba(0, 186, 255, 0.5), 0 0 40px rgba(0, 186, 255, 0.5), 0 0 50px rgba(0, 186, 255, 0.5), 0 0 75px rgba(0, 186, 255, 0.5); }
`;

export const Logo = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");
  font-family: "Montserrat", sans-serif;
  text-align: center;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 48px;
  margin: 0;
  color: #ffffff;
  animation:
    ${move} 3s linear infinite,
    ${shimmer} 0.5s linear infinite;
`;

const fadeOut = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo2 = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");
  font-family: "Montserrat", sans-serif;
  text-align: center;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 23px;
  margin: 0;
  animation: ${fadeOut} 2s linear infinite;
`;

export const ProfilePicture = styled.div`
  img {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    object-fit: cover;
    animation: ${rotate} 0.8s linear infinite;
  }
`;

const rotate2 = keyframes`
  from {
    transform: rotate(0deg) scaleX(-1);
  }
  to {
    transform: rotate(360deg) scaleX(-1);
  }
`;

export const ProfilePicture2 = styled.div`
  img {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    object-fit: cover;
    animation: ${rotate2} 1s linear infinite;
    filter: invert(1) brightness(2);
  }
`;
