import { ActivitiesList, User } from '../profile.models';
import Achievements from '../components/Achievements';
import Activity from '../components/Activity';
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import GeneralInfo from '../components/GeneralInfo';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';
import NavBar from 'components/NavBar/NavBar';
import ProfileWidget from 'components/ProfileWidget/ProfileWidget';
import React from 'react';
import styled from 'styled-components';

interface ProfileProps {
  user: User;
  activity: ActivitiesList;
}

const MyProfilePage = ({ user, activity }: ProfileProps) => (
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
      <BreadCrumbsContainer>
        <BreadCrumbs pageTitle="Profile" />
      </BreadCrumbsContainer>
      <Info>
        <Left>
          <GeneralInfo user={user} />
          <Achievements />
        </Left>
        <Right>
          <Activity activity={activity} />
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
  activity: {
    worker: [
      {
        id: '123sdjk',
        picture: '1.jpeg',
        title: 'Some long activity symbols',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos. Lorem ipsum dolor sit amet.',
      },
      {
        id: '9dfn03',
        picture: '2.jpeg',
        title: 'Lorem ipsum dolor sit, amtur adipisicing elitnt, delectus!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos. Lorem ipsum dolor sit amet.',
      },
      {
        id: 'fmjcubck38',
        picture: '3.jpeg',
        title: 'Lorem ipsum dolor sit, amet consecte elit. Nesciunt, delectus!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos. Lorem ipsum dolor sit amet.',
      },
    ],
    recruter: [
      {
        id: '12af3sdjk',
        picture: '5.jpeg',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, delectus!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos. Lorem ipsum dolor sit amet.',
      },
      {
        id: '9dfasn03',
        picture: '6.jpeg',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, delectus!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos. Lorem ipsum dolor sit amet.',
      },
      {
        id: 'fmjc12asubck38',
        picture: '7.jpeg',
        title:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, delectus!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos. Lorem ipsum dolor sit amet.',
      },
    ],
    reviews: [
      {
        id: '1azawr',
        picture: '0.jpeg',
        title: 'Lorem ipsum dolor sit, amet consectetur ad!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos. Lorem ipsum dolor sit amet.',
      },
      {
        id: 'asd9jd3',
        picture: '6.jpeg',
        title: 'Lorem ipsum dolor sit, isicing elit. Nesciunt, delectus!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos. Lorem ipsum dolor sit amet.',
      },
      {
        id: 'mvd93dls',
        picture: '4.jpeg',
        title:
          'Lorem ipsum dolor sit, amet ctetur adipisicing elit. Nesciunt, delectus!',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimos. Lorem ipsum dolor sit amet.',
      },
    ],
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

const BreadCrumbsContainer = styled.div`
  padding: 15px 20px;
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
