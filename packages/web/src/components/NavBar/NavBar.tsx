import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavBar = () => (
  <Bar>
    <Logo dark />
    <ul>
      <li>
        <ItemLink to="/" activeClassName="active" exact>
          <div></div>
          <div>Home</div>
        </ItemLink>
      </li>
      <li>
        <ItemLink to="/search" activeClassName="active">
          <div></div>
          <div>Recruit</div>
        </ItemLink>
      </li>
      <li>
        <ItemLink to="/find-a-work" activeClassName="active">
          <div></div>
          <div>Find a work</div>
        </ItemLink>
      </li>
      <li>
        <ItemLink to="/about" activeClassName="active">
          <div></div>
          <div>About</div>
        </ItemLink>
      </li>
    </ul>
  </Bar>
);

const Bar = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 310px;
  background-color: ${props => props.theme.colors.lightGrey};
  padding-left: 20px;
  padding-top: 20px;
  box-sizing: border-box;
`;

const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.darkGrey};
  font-size: 15px;
  margin-top: 10px;

  &.active {
    color: ${props => props.theme.colors.primaryBlue};
  }
`;

export default NavBar;
