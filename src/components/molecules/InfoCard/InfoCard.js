import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
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

  @media (max-width: 800px) {
    transform: translate(${({ isVisible }) => (isVisible ? '-100%' : '100%')});
    transition: transform 0.4s ease-in-out;
    position: absolute;
    z-index: 9999999;
    right: 67%;
  }
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

  @media (min-width: 750px) {
    position: relative;
  }
`;

const BottomWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
`;

const InfoCard = ({
  title,
  link,
  content,
  founderOne,
  founderTwo,
  id,
  icon,
  foName,
  ftName,
  isVisible,
}) => (
  <StyledWrapper isVisible={isVisible} key={id}>
    <TopWrapper>
      <StyledHeading big>{title}</StyledHeading>
      <StyledCompanyIcon href={link} target="_blank" rel="noopener noreferrer" icon={icon} />
    </TopWrapper>
    <StyledParagraph>{content}</StyledParagraph>
    <BottomWrapper>
      <FoundersAvatar alt={foName} src={founderOne} />
      <FoundersAvatar alt={ftName} src={founderTwo} />
    </BottomWrapper>
  </StyledWrapper>
);

InfoCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  link: PropTypes.string,
  content: PropTypes.string,
  founderOne: PropTypes.string,
  founderTwo: PropTypes.string,
  icon: PropTypes.element,
  foName: PropTypes.string,
  ftName: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
};

InfoCard.defaultProps = {
  title: '',
  link: '',
  content: '',
  founderOne: '',
  founderTwo: '',
  icon: '',
  foName: '',
  ftName: '',
};

export default InfoCard;
