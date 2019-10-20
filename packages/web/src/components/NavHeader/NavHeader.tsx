import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Profile from 'components/Profile/Profile';

const NavHeader = () => (
  <Wrapper>
    <NavCol>
      <LogoContainer>
        <Logo />
      </LogoContainer>
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

const LogoContainer = styled.div`
  position: relative;
  z-index: 7;
`;

const List = styled.ul`
  position: relative;
  z-index: 7;
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
  font-weight: 300;

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

const ProfileContainer = styled.div`
  position: relative;
  z-index: 7;

  @media (max-width: 731px) {
    display: none;
  }
`;

export default NavHeader;
