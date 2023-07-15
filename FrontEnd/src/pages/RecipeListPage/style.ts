import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex; // 추가
  align-items: center; // 추가
  justify-content: center; // 추가
  flex-wrap: wrap; // 추가: 한 줄이 꽉 차면 다음 줄로 넘어가게 설정
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

