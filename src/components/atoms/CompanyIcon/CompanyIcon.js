import styled from 'styled-components';

const CompanyIcon = styled.a`
  height: 65px;
  width: 65px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: hsl(338, 100%, 42%);
  border-radius: 50px;
  border: none;
  display: block;
  background-size: 68%;
  background-position: center;
  cursor: pointer;
`;

export default CompanyIcon;
