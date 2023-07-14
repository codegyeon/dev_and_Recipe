import styled from 'styled-components';

interface ButtonProps {
  size?: string|null;
  theme?: string|null;
}

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border-radius: 50px; // 둥근 테두리를 위해 변경
  transition: all 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
  border: none; // 테두리 없앰
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); // 그림자 추가
  font-weight: bold;
  
  width: ${props => props.size === 'large' ? '200px' :
  props.size === 'medium' ? '130px' :
    props.size === 'small' ? '100px' : '80px'};
  height: ${props => props.size === 'large' ? '50px' :
  props.size === 'medium' ? '45px' :
    props.size === 'small' ? '40px' : '30px'};

  color: ${props => props.theme === 'type1' ? 'white' :
  props.theme === 'type2' ? 'white' : 'black'};

  background: ${props => props.theme === 'type1' ? 'skyblue' :
  props.theme === 'type2' ? '#d63031' : 'white'};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  }

  &:active {
    transform: scale(1.0);
    box-shadow: none;
  }
`;