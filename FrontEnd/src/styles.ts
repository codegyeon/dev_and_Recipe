import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace
  }
`;

export const Form = styled.form`
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  display: flex;
  gap: 20px;
`;

export const LayOut = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

export const InputGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

export const Input = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

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
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

export const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;

export const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

export const GenericButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;

export const DeleteButton = styled(GenericButton)`
  background-color: #fff;
  border: 2px solid red;
`;

export const CompleteButton = styled(GenericButton)`
  background-color: #fff;
  border: 2px solid green;
`;

export const ListContainer = styled.div`
  padding: 0 24px;
`;

export const ListWrapper = styled.div`
  display: inline-block;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 20px;
`;
