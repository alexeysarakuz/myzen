import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Profile from 'components/Profile/Profile';

const NavHeader = () => (
  <Wrapper>
    <NavCol>
      <Logo />
      <List>
        <ListItem>
          <ListLink to="/" activeClassName="active" exact>
            Home
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink to="/search">Recruit</ListLink>
        </ListItem>
        <ListItem>
          <ListLink to="/find-a-work">Find a work</ListLink>
        </ListItem>
        <ListItem>
          <ListLink to="/about">About</ListLink>
        </ListItem>
      </List>
    </NavCol>
    <NavCol>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
      <Hamburger />
    </NavCol>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 19px;
  color: ${props => props.theme.colors.white};
`;

const NavCol = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  margin-left: 90px;

  @media (max-width: 820px) {
    margin-left: 50px;
  }

  @media (max-width: 731px) {
    display: none;
  }
`;

const ListItem = styled.li`
  margin-right: 30px;
  font-size: 14px;
  font-weight: 100;

  @media (max-width: 820px) {
    font-size: 13px;
    margin-right: 27px;
  }
`;

const ListLink = styled(NavLink)`
  color: ${props => props.theme.colors.white};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0;
    background-color: ${props => props.theme.colors.white};
    transition: width 0.2s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &.active {
    &::after {
      width: 100%;
    }
  }
`;

const Hamburger = styled.div`
  @media (max-width: 731px) {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.lightYellow};
  }
`;

const ProfileContainer = styled.div`
  @media (max-width: 731px) {
    display: none;
  }
`;

export default NavHeader;
