import styled from 'styled-components';

export const SearchbarHeader = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 20px 0;
    background: linear-gradient(
    315deg,
    rgba(101, 0, 94, 0.7) 3%,
    rgba(60, 132, 206, 0.7) 38%,
    rgba(48, 238, 226, 0.7) 68%,
    rgba(255, 25, 25, 0.7) 98%
    );
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
`;
export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;
export const Button = styled.button`
  width: 120px;
  height: 48px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  border-radius: 8px;
  background: linear-gradient(180deg, #40df9f 0%, #3ed598 100%);
  box-shadow: 0px 2px 4px rgba(15, 218, 137, 0.3);
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: #286053;
  }
`;
export const Input = styled.input`
  margin: 12px;
  width: 226px;
  height: 48px;
  border-radius: 8px;
  background-color: gainsboro;
`;