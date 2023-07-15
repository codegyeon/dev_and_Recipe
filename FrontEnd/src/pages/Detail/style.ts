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
  backgroundColor: white;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow:
          0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
  align-content: center;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
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