/* eslint @typescript-eslint/camelcase: 0 */
import AdvantagesSection from '../components/AdvantagesSection';
import ProfileWidget from 'components/ProfileWidget/ProfileWidget';
import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import styled from 'styled-components';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';
import { StepsModels } from 'modules/dashboard/dashboard.models';
import StepsSection from '../components/StepsSection';
import StatisticsSection from '../components/StatisticsSection';

interface GettingStartedProps {
  steps: StepsModels;
}

const GettingStartedPage = ({ steps }: GettingStartedProps) => (
  <Page>
    <NavBarContainer>
      <NavBar />
    </NavBarContainer>
    <Container>
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
      <SideContent>
        <StatisticsSection />
        <StepsSection steps={steps} />
        <AdvantagesSection />
      </SideContent>
    </Container>
  </Page>
);

const Page = styled.div`
  background: ${props => props.theme.colors.lightGray};
`;

const Container = styled.div`
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

const SideContent = styled.div`
  padding: 15px 20px;
  padding-top: 0;
  box-sizing: border-box;
`;

GettingStartedPage.defaultProps = {
  steps: {
    create_account: false,
    add_payment: false,
    find_job: false,
    hire_freelancer: false,
  },
};

export default GettingStartedPage;
