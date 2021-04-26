import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  display: block;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 40%;
  border: none;
  background-position: 50% 50%;
  background-size: 50% 50%;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
