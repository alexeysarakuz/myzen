import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavBar = () => (
  <Bar>
    <Logo dark />
    <NavList>
      <li>
        <ItemLink to="/" activeClassName="active" exact>
          <span className="icon-add-outline"></span>
          <div>Getting Started</div>
        </ItemLink>
      </li>
      <li>
        <ItemLink to="/search" activeClassName="active">
          <span className="icon-user-plus"></span>
          <div>Recruit</div>
        </ItemLink>
      </li>
      <li>
        <ItemLink to="/find-a-work" activeClassName="active">
          <span className="icon-search"></span>
          <div>Find a work</div>
        </ItemLink>
      </li>
      <li>
        <ItemLink to="/about" activeClassName="active">
          <span className="icon-information-outline"></span>
          <div>About</div>
        </ItemLink>
      </li>
    </NavList>
    <OptionsList>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </OptionsList>
  </Bar>
);

const Bar = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 280px;
  background-color: ${props => props.theme.colors.lightGrey};
  padding-left: 20px;
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  margin-top: 60px;
`;

const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.darkGrey};
  font-size: 15px;
  margin-top: 26px;
  margin-bottom: 26px;

  &.active {
    color: ${props => props.theme.colors.primaryBlue};
  }

  span {
    margin-right: 10px;
    font-size: 18px;
  }
`;

const OptionsList = styled.ul`
  margin-top: auto;
`;

export default NavBar;
