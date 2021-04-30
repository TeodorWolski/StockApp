import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import GoogleIcon from 'assets/icons/google.svg';
import CompanyIcon from 'components/atoms/CompanyIcon/CompanyIcon';
import FoundersAvatar from 'components/atoms/FoundersAvatar/FoundersAvatar';

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

const TopWrapper = styled.div`
  position: absolute;
  top: 7%;
  left: 13%;
  display: flex;
  flex-direction: row;
`;

const StyledCompanyIcon = styled(CompanyIcon)`
  position: relative;
  display: block;
  right: 75%;
  bottom: 18%;
`;

const StyledHeading = styled(Heading)`
  position: relative;
  display: block;
  left: 33%;
  margin-top: 5%;
`;

const StyledParagraph = styled(Paragraph)`
  width: 260px;
  margin-left: 0;
  text-align: center;
`;

const BottomWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
`;

const InfoCard = () => (
  <StyledWrapper>
    <TopWrapper>
      <StyledHeading big>Google</StyledHeading>
      <StyledCompanyIcon
        href="https://en.wikipedia.org/wiki/Google"
        target="_blank"
        rel="noopener noreferrer"
        icon={GoogleIcon}
      />
    </TopWrapper>
    <StyledParagraph>
      Google LLC is an American multinational technology company that specializes in
      Internet-related services and products, which include online advertising technologies, a
      search engine, cloud computing, software, and hardware.
    </StyledParagraph>
    <BottomWrapper>
      <FoundersAvatar src="https://i.wpimg.pl/O/400x400/d.wpimg.pl/766422956--24694776/1larrypage.jpg" />
      <FoundersAvatar src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Sergey_Brin_cropped.jpg" />
    </BottomWrapper>
  </StyledWrapper>
);

export default InfoCard;
