import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
  

  body {

    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }
  *{
    box-sizing: content-box!important;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
    box-sizing: content-box!important;
    background-color: ghostwhite;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace
  }
  .ReactModal__Body--open,
  .ReactModal__Html--open{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
    background: none;
    box-sizing: content-box !important;
    height: auto;
    h2{
      text-align: left!important;
    }
  }
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  max-width: 100%;
`;

export const Parent = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.div`
  flex: 2 0 auto; /* flex-grow: 2, flex-shrink: 0, flex-basis: auto */
  align-content: center;
  background-color: ghostwhite;
  height: auto;
  width: 60%;
  gap: 20px;
  margin: 20px auto;
  box-shadow:
          0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const TotalContainer = styled.div`
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
  height: 100%;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  margin-top: 15px;
`;

export const ContentContainer = styled.div`
  border-radius: 12px;
  height: 100%;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: gray;
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Footer = styled.div`
  height: 150px;
  padding: 30px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  background: lightgray;
  color: #333;
  font-weight: 600;
  flex-shrink: 0;
`;

export const LayOut = styled.div`
  margin: 0 auto;
  min-width: 1200px;
  height: 100vh;
  justify-content: center;
`;
