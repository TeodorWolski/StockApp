import styled from 'styled-components';

const HideCardButton = styled.button`
  border-radius: 50px;
  height: 87px;
  width: 87px;
  background: linear-gradient(#f00, #f0f);

  border: hsl(338, 100%, 42%) 5px solid;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9999;
  left: 10%;
  bottom: 20%;

  @media (min-width: 810px) {
    display: none;
  }
`;

export default HideCardButton;
