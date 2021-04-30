import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.nav`
  width: 1000vh;
  height: 10vh;
  background-color: #060817;
  border-bottom: 5px solid hsl(338, 100%, 42%);
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

const Navbar = () => (
  <StyledWrapper>
    {/* <ul>
      <li>
        <NavLink>Apple</NavLink>
      </li>
      <li>
        <NavLink>Google</NavLink>
      </li>
      <li>
        <NavLink>Amazon</NavLink>
      </li>
      <li>
        <NavLink>Facebook</NavLink>
      </li>
    </ul> */}
  </StyledWrapper>
);

export default Navbar;
