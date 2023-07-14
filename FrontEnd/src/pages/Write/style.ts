import styled from "styled-components";

export const TextArea = styled.textarea`
  align-items: center;
  border: 1px #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 300%;
  resize: none;
`;

export const Container2 = styled.div`
  background-color: whitesmoke;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  gap: 20px;
  width: 90%;
  height: 300px;
`;

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  gap: 20px;
  padding: 0 20px;
`;

interface DivProps {
    done?: boolean;
}

export const DoneContainer = styled.div<DivProps>`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color: ${(props) => (props.done ? "green" : "red")};
`;

export const ButtonContainer = styled.div`
  grid-column: 1/3;
  grid-row: 4/5;
`;