import styled from "styled-components";

export const Container2 = styled.div`
  backgroundColor: white;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid gray;

  align-content: center;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;