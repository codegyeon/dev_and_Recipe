import styled from "styled-components";

export const RecipeContainer = styled.div`
  grid-gap: 20px; // 카드 간 간격
  gap:20px;
  align-content: start;
  width: 100%;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

