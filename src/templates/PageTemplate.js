import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7%;
`;

const PageTemplate = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageTemplate;
