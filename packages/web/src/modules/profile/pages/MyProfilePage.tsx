import Achievements from '../components/Achievements';
import Activity from '../components/Activity';
import GeneralInfo from '../components/GeneralInfo';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';
import NavBar from 'components/NavBar/NavBar';
import ProfileWidget from 'components/ProfileWidget/ProfileWidget';
import React from 'react';
import styled from 'styled-components';
import { User } from '../profile.models';

interface ProfileProps {
  user: User;
}

const MyProfilePage = ({ user }: ProfileProps) => (
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
          <ProfileWidget />
        </ProfileContainer>
      </Header>
      <Info>
        <Left>
          <GeneralInfo user={user} />
          <Achievements />
        </Left>
        <Right>
          <Activity />
        </Right>
      </Info>
    </Content>
  </Page>
);

MyProfilePage.defaultProps = {
  user: {
    id: '1klasdls',
    username: 'Alex Sarakuz',
    email: 'ovens290375@gmail.com',
    confirmed: false,
    picture: '5.jpeg',
    creditCard: null,
    phone: null,
  },
};

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

const Info = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  align-items: flex-start;
`;

const Left = styled.div`
  width: 45%;
`;

const Right = styled.div`
  width: 53%;
`;

export default MyProfilePage;
