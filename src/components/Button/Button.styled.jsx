
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 120px;
  height: 48px;
  line-height: 100%;
  text-align: center;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  background-color: gainsboro;
  :hover,
  :focus {
    color: black;
    background-color: rgba(255, 255, 126, 1);
  }
`;