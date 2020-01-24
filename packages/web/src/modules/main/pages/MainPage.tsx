import Abstractions from '../components/Abstractions';
import Container from 'components/Grid/Container';
import NavHeader from 'components/NavHeader/NavHeader';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Widgets from '../components/Widgets';

const MainPage = () => {
  const [loaded, makeLoaded] = useState(false);

  useEffect(() => {
    makeLoaded(true);
  }, []);

  return (
    <Wrapper>
      <Container>
        <NavHeader />
        <MainContent>
          <div>
            <Title>You hate routine, right?</Title>
            <Paragraph>
              Lorem ipsum dolor sit, amet cotetur adipisicing elit. Beatae illum
              quidem facilis adipisc voltum vero excepturi aut.
            </Paragraph>
            <Button>
              {/* <StartLink to="/search">Find a freelancer</StartLink> */}
              <StartLink to="/search">Join our service</StartLink>
            </Button>
          </div>
          <WidgetsContainer>
            <Widgets loaded={loaded} />
          </WidgetsContainer>
        </MainContent>
      </Container>
      <AbstractContainer>
        <Abstractions loaded={loaded} />
      </AbstractContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

const MainContent = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  z-index: 20;
  margin-top: 53px;
  padding-top: 30px;
  margin-left: 184px;

  @media (max-width: 1300px) {
    margin-left: 70px;
  }

  @media (max-width: 700px) {
    margin-top: 10px;
    width: 100%;
    text-align: center;
    margin-left: 0;
    flex-direction: column;
  }

  @media (max-width: 350px) {
    margin-top: 0;
  }

  @media (max-width: 600px) and (min-height: 667px) {
    margin-top: 35px;
  }

  @media (max-width: 600px) and (min-height: 730px) {
    margin-top: 75px;
  }

  @media (min-height: 790px) {
    margin-top: 113px;
  }

  @media (min-height: 890px) {
    margin-top: 133px;
  }
`;

const Title = styled.h2`
  max-width: 500px;
  margin-top: 45px;
  font-size: 57px;
  font-weight: 900;
  line-height: 1.1;
  color: ${props => props.theme.colors.white};

  @media (max-width: 1258px) {
    max-width: 450px;
    font-size: 50px;
  }

  @media (max-width: 1055px) {
    min-width: 380px;
    font-size: 45px;
  }

  @media (max-width: 700px) {
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 500px) {
    max-width: 340px;
    min-width: auto;
    font-size: 40px;
  }

  @media (max-width: 340px) {
    font-size: 36px;
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Paragraph = styled.p`
  max-width: 300px;
  margin-top: 35px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 1.6;
  color: ${props => props.theme.colors.white};

  @media (min-width: 1697px) {
    margin: 55px 0 !important;
  }

  @media (max-width: 700px) {
    margin: 40px auto !important;
    max-width: 300px !important;
  }

  @media (max-width: 350px) {
    font-size: 14px !important;
    margin: 30px auto !important;
    max-width: 300px !important;
  }

  @media (max-width: 340px) {
    margin: 36px auto !important;
  }

  @media (min-height: 790px) {
    margin: 40px 0;
  }

  @media (min-height: 890px) {
    margin: 50px 0;
    max-width: 400px;
  }
`;

const Button = styled.button`
  padding: 0;
  font-size: 15px;
  background-color: ${props => props.theme.colors.primaryGreen};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  margin-bottom: 40px;

  &:hover {
    background-color: ${props => props.theme.colors.yellow};
  }

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: none;
  }

  @media (max-width: 415px) {
    margin-top: 40px;
  }
`;

const StartLink = styled(Link)`
  display: block;
  padding: 13px 42px;
  color: ${props => props.theme.colors.white};
`;

const WidgetsContainer = styled.div`
  transform: translateX(-15px);

  @media (min-width: 1697px) {
    transform: translateX(90px);
  }

  @media (max-width: 1300px) {
    transform: translateX(55px);
  }

  @media (max-width: 1258px) {
    transform: translateX(25px);
  }

  @media (max-width: 1258px) {
    transform: translateX(-15px);
  }

  @media (max-width: 1100px) {
    transform: translateX(0);
  }

  @media (max-width: 1060px) {
    transform: translateX(115px);
  }

  @media (max-width: 1010px) {
    transform: translateX(55px);
  }

  @media (max-width: 892px) {
    transform: translateX(0);
  }

  @media (max-width: 700px) {
    margin-bottom: 50px;
    margin-top: 30px;
  }
`;

const AbstractContainer = styled.div`
  position: absolute;
  z-index: 4;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default MainPage;
