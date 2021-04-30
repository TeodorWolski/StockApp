import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import GoogleIcon from 'assets/icons/google.svg';
import CompanyIcon from 'components/atoms/CompanyIcon/CompanyIcon';

const StyledWrapper = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin-left: 2%;
`;

const StyledCompanyIcon = styled(CompanyIcon)`
  position: relative;
  right: 55%;
  bottom: 37%;
`;

const StyledHeading = styled(Heading)`
  position: relative;
  bottom: 35%;
  margin-left: 50%;
`;

const InfoCard = () => (
  <StyledWrapper>
    <StyledHeading>Google</StyledHeading>
    <StyledCompanyIcon icon={GoogleIcon} />
  </StyledWrapper>
);

export default InfoCard;
