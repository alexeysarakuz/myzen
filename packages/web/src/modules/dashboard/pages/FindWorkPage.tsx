import Profile from 'components/Profile/Profile';
import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';

const FindWorkPage = () => (
  <Page>
    <NavBarContainer>
      <NavBar />
    </NavBarContainer>
    <Content>
      <Header>
        <LogoContainer>
          <Logo dark />
        </LogoContainer>
        <HamburgerContainer>
          <Hamburger />
        </HamburgerContainer>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
      </Header>
    </Content>
  </Page>
);

const Page = styled.div`
  background: ${props => props.theme.colors.lightGray};
`;

const Content = styled.div`
  min-height: 100vh;
  padding-left: 280px;

  @media (min-width: 1555px) {
    padding-left: 310px;
    padding-right: 30px;
  }

  @media (min-width: 1655px) {
    max-width: 1430px;
    margin: 0 auto;
  }
`;

const NavBarContainer = styled.div`
  @media (max-width: 731px) {
    display: none;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 20px;
  padding-top: 19px;
  box-sizing: border-box;

  @media (max-width: 731px) {
    flex-wrap: wrap;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: none;

  @media (max-width: 731px) {
    display: block;
  }
`;

const HamburgerContainer = styled.div`
  margin-left: 30px;
  display: none;

  @media (max-width: 731px) {
    display: block;
  }
`;

const ProfileContainer = styled.div`
  @media (max-width: 731px) {
    display: none;
  }
`;

export default FindWorkPage;
