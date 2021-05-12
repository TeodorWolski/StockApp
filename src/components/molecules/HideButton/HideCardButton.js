import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
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

const StyledButton = styled.div`
  background: url(${({ icon }) => icon});
  background-size: 50%;
  background-position: 50%;
  background-repeat: no-repeat;
  border: none;
  height: 100px;
  width: 100px;
  cursor: pointer;
`;

const HideCardButton = ({ icon }) => (
  <StyledWrapper>
    <StyledButton icon={icon} as="button" />
  </StyledWrapper>
);

HideCardButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default HideCardButton;
