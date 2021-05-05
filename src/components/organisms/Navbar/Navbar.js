import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';

const StyledWrapper = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: #060817;
  border-bottom: 5px solid hsl(338, 100%, 42%);
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 3;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.ul`
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledListItem = styled.li`
  position: relative;
  text-decoration: none;
  margin: 5px 30px 5px 30px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 2.4rem;
  color: white;

  &:visited {
    color: white;
  }

  &.active {
    color: hsl(338, 100%, 42%);
  }
`;

const Navbar = () => (
  <StyledWrapper>
    <StyledList>
      <StyledListItem>
        <StyledNavLink to={routes.apple} activeclass="active">
          Apple
        </StyledNavLink>
      </StyledListItem>
      <StyledListItem>
        <StyledNavLink to={routes.google} activeclass="active">
          Google
        </StyledNavLink>
      </StyledListItem>
      <StyledListItem>
        <StyledNavLink to={routes.amazon} activeclass="active">
          Amazon
        </StyledNavLink>
      </StyledListItem>
      <StyledListItem>
        <StyledNavLink to={routes.facebook} activeclass="active">
          Facebook
        </StyledNavLink>
      </StyledListItem>
    </StyledList>
  </StyledWrapper>
);

export default Navbar;
