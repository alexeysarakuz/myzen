import * as AuthActions from 'modules/auth/auth.actions';
import { connect } from 'react-redux';
import { getIsAuthenticated } from 'modules/auth/auth.reducer';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerImage = () => (
  <HamburgerSVG
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="20"
    viewBox="0 0 57.582 47.11"
  >
    <path
      d="M0,88.816H57.582v-6.4H0ZM0,68.463H57.582v-6.4H0ZM0,41.705v6.4H57.582v-6.4Z"
      transform="translate(0 -41.705)"
      fill="#fff"
    />
  </HamburgerSVG>
);

interface HamburgerProps {
  authorized: boolean;
  logout: () => void;
}

const Hamburger = ({ authorized, logout }: HamburgerProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoad, changeLoad] = useState(false);

  return (
    <>
      <HamburgerContainer onClick={() => setIsActive(!isActive)}>
        <HamburgerImage />
      </HamburgerContainer>
      <Menu isActive={isActive}>
        <ProfileData>
          {authorized ? (
            <ProfileWidget onLoad={() => changeLoad(true)} isLoad={isLoad}>
              <Image src="https://thispersondoesnotexist.com/image" />
            </ProfileWidget>
          ) : (
            <Row>
              <Button to="/login">Log In</Button>
              <Button to="/register">Sign Up</Button>
            </Row>
          )}
        </ProfileData>
        <NavList>
          <li>
            <ListLink to="/" activeClassName="active" exact>
              <span className="icon icon-add-outline" />
              <ListItem>Home</ListItem>
            </ListLink>
          </li>
          <li>
            <ListLink to="/search">
              <span className="icon icon-user-plus" />
              <ListItem>Recruit</ListItem>
            </ListLink>
          </li>
          <li>
            <ListLink to="/find-a-work">
              <span className="icon icon-search" />
              <ListItem>Find a work</ListItem>
            </ListLink>
          </li>
          <li>
            <ListLink to="/about">
              <span className="icon icon-information-outline" />
              <ListItem>About</ListItem>
            </ListLink>
          </li>
        </NavList>
        <SupportList>
          <li>
            <ListLink to="/about">
              <span className="icon icon-information-outline" />
              <ListItem>About</ListItem>
            </ListLink>
          </li>
          <li>
            <ListCategory onClick={logout}>
              <span className="icon icon-switch" />
              <ListItem>Logout</ListItem>
            </ListCategory>
          </li>
        </SupportList>
      </Menu>
      <Overlay isActive={isActive} onClick={() => setIsActive(false)} />
    </>
  );
};

const ProfileData = styled.div`
  padding-bottom: 20px;
`;

const HamburgerContainer = styled.button`
  border: none;
  position: relative;
  z-index: 63;
  display: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media (max-width: 731px) {
    display: block;
    padding: 15px 14px;
    background-color: ${props => props.theme.colors.darkYellow};
    border-radius: 10px;
  }
`;

const HamburgerSVG = styled.svg`
  display: block;
`;

const Menu = styled.div<{ isActive: boolean }>`
  display: none;

  @media (max-width: 731px) {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 25px 20px;
    position: fixed;
    width: 360px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 62;
    background-color: ${props => props.theme.colors.white};
    transition: 0.5s;
    transform: translateX(0%);

    ${props =>
      !props.isActive &&
      `
        transform: translateX(-100%);
      `}
  }

  @media (max-width: 631px) {
    width: 280px;
  }

  @media (max-width: 454px) {
    width: 280px;
  }

  @media (max-width: 362px) {
    max-width: 250px;
  }

  @media (max-width: 343px) {
    max-width: 230px;
  }
`;

const Overlay = styled.div<{ isActive: boolean }>`
  display: none;

  @media (max-width: 731px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 60;
    background-color: ${props => props.theme.colors.black};

    ${props =>
      props.isActive &&
      `
        display: block;
        opacity: .5;
      `}
  }
`;

const NavList = styled.ul`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ListLink = styled(NavLink)`
  display: inline-block;
  font-size: 15px;
  line-height: 25px;
  color: ${props => props.theme.colors.darkGray};
  margin-top: 10px;
  margin-bottom: 10px;

  span {
    display: inline-block;
    vertical-align: middle;
    transition: 0.3s;
  }

  span.icon {
    color: ${props => props.theme.colors.darkGray};
    margin-right: 10px;
    font-size: 18px;
  }

  &.active {
    color: ${props => props.theme.colors.primaryBlue};

    span.icon {
      color: ${props => props.theme.colors.primaryBlue};
    }
  }

  &:hover {
    color: ${props => props.theme.colors.primaryBlue};

    span.icon {
      color: ${props => props.theme.colors.primaryBlue};
    }
  }
`;

const ListItem = styled.span`
  margin-left: 13px;
`;

const ProfileWidget = styled.div<{ isLoad: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 50%;
  overflow: hidden;

  ${props =>
    !props.isLoad &&
    `
    &::after {
      content: '';
      text-align: center;
      width: 45px;
      height: 45px;
      background-color: ${props.theme.colors.lightGrayTags};
    }

    img {
      display: none;
    }
  `}
`;

const Image = styled.img`
  width: 43px;
  height: 43px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled(Link)`
  display: block;
  width: 48%;
  padding: 14.5px 0;
  text-align: center;
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primaryGreen};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.yellow};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 820px) {
    padding: 14.5px 0;
    font-size: 13px;
  }
`;

const SupportList = styled.ul`
  margin-top: auto;
`;

const ListCategory = styled.div`
  display: inline-block;
  font-size: 15px;
  line-height: 25px;
  color: ${props => props.theme.colors.darkGray};
  margin-top: 10px;
  margin-bottom: 10px;

  span {
    display: inline-block;
    vertical-align: middle;
    transition: 0.3s;

    &.icon {
      color: ${props => props.theme.colors.darkGray};
      margin-right: 10px;
      font-size: 18px;
    }
  }

  &:hover {
    color: ${props => props.theme.colors.primaryBlue};

    span.icon {
      color: ${props => props.theme.colors.primaryBlue};
    }
  }

  &.active {
    color: ${props => props.theme.colors.primaryBlue};

    span.icon {
      color: ${props => props.theme.colors.primaryBlue};
    }
  }
`;

const mapStateToProps = (state: any) => ({
  authorized: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  logout: AuthActions.logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hamburger);
