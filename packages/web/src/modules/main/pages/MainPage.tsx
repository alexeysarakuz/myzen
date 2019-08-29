import Container from 'components/Grid/Container';
import NavHeader from 'components/NavHeader/NavHeader';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainPage = () => (
  <Wrapper>
    <Container>
      <NavHeader />
      <MainContent>
        <Title>You hate routine, right?</Title>
        <Paragraph>
          Lorem ipsum dolor sit, amet cotetur adipisicing elit. Beatae illum
          quidem facilis adipisc voltum vero excepturi aut.
        </Paragraph>
        <Button>
          <StartLink to="/search">Let&apos;s get started</StartLink>
        </Button>
      </MainContent>
    </Container>
    <AbstractContainer>
      <AbstractBlueSquare />
      <AbstractYellowSquare />
      <AbstractCyanSquare />
      <AbstractYellowSquareBottom />
      <AbstractBlueSquareBottom />
      <AbstractRedSquareBottom />
    </AbstractContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const MainContent = styled.div`
  position: relative;
  z-index: 20;
  margin-top: 123px;
  margin-left: 184px;

  @media (max-width: 1300px) {
    margin-left: 70px;
  }

  @media (max-width: 700px) {
    margin-top: 90px;
    width: 100%;
    text-align: center;
    margin-left: 0;
  }

  @media (max-width: 350px) {
    margin-top: 60px;
  }

  @media (min-height: 790px) {
    margin-top: 150px;
  }

  @media (min-height: 890px) {
    margin-top: 180px;
  }
`;

const Title = styled.h2`
  max-width: 500px;
  font-size: 60px;
  font-weight: 900;
  color: ${props => props.theme.colors.white};
  line-height: 1.1;

  @media (max-width: 900px) {
    font-size: 50px;
  }

  @media (max-width: 700px) {
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 500px) {
    max-width: 340px;
    font-size: 40px;
  }

  @media (max-width: 350px) {
    font-size: 30px;
    max-width: 250px;
  }
`;

const Paragraph = styled.p`
  max-width: 300px;
  margin-top: 35px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 1.6;
  color: ${props => props.theme.colors.white};

  @media (max-width: 700px) {
    margin: 50px auto !important;
    max-width: 300px !important;
  }

  @media (max-width: 350px) {
    font-size: 14px !important;
    margin: 30px auto !important;
    max-width: 300px !important;
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
`;

const StartLink = styled(Link)`
  display: block;
  padding: 13px 42px;
  color: ${props => props.theme.colors.white};
`;

const AbstractContainer = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 4;
`;

const AbstractBlueSquare = styled.div`
  position: absolute;
  min-width: 70%;
  width: 1356px;
  height: 1020px;
  left: -361.49px;
  top: -469.06px;
  border-radius: 314px;
  transform: rotate(14deg);
  background-color: ${props => props.theme.colors.primaryDarkBlue};
  z-index: 6;

  @media (min-height: 690px) {
    height: 1080px;
  }

  @media (min-height: 790px) {
    height: 1160px;
  }

  @media (min-height: 890px) {
    height: 1230px;
  }

  @media (min-height: 970px) {
    height: 1300px;
  }

  @media (max-width: 1455px) {
    width: 1262px;
  }

  @media (max-width: 1300px) {
    width: 1062px;
  }

  @media (max-width: 700px) {
    width: 100% !important;
    height: 100% !important;
    top: 0 !important;
    left: 0 !important;
    transform: rotate(0) !important;
    border-radius: 0 !important;
  }
`;

const AbstractYellowSquare = styled.div`
  position: absolute;
  width: 700px;
  height: 519px;
  transform: rotate(13deg);
  top: -426px;
  right: -330px;
  background-color: ${props => props.theme.colors.lightYellow};
  border-radius: 154px;
  z-index: 7;

  @media (max-width: 1200px) {
    right: -400px;
  }

  @media (max-width: 1060px) {
    border-radius: 254px;
    top: -410px;
  }

  @media (max-width: 756px) {
    width: 690px;
  }

  @media (max-width: 704px) {
    background-color: transparent;
    z-index: 5;
  }

  @media (min-width: 1700px) {
    right: -230px;
  }

  @media (min-width: 1850px) {
    width: 900px;
    right: -230px;
  }

  @media (min-width: 1980px) {
    width: 1000px;
    right: -300px;
    top: -400px;
  }

  @media (min-width: 2190px) {
    width: 1000px;
    right: -200px;
    top: -360px;
  }
`;

const AbstractCyanSquare = styled.div``;

const AbstractYellowSquareBottom = styled.div`
  position: absolute;
  bottom: 30px;
  left: -170px;
  width: 243px;
  height: 243px;
  border-radius: 56px;
  z-index: 7;
  background-color: ${props => props.theme.colors.lightYellow};
  transform: rotate(15deg);

  @media (max-width: 1300px) {
    left: -200px;
  }

  @media (max-width: 350px) {
    left: -220px;
  }
`;

const AbstractBlueSquareBottom = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 90px;
  height: 90px;
  transform: rotate(15deg);
  background-color: ${props => props.theme.colors.cyan};
  border-radius: 30px;
  z-index: 6;

  @media (max-width: 350px) {
    left: -20px;
  }
`;

const AbstractRedSquareBottom = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 15px;
  left: 120px;
  transform: rotate(15deg);
  background-color: ${props => props.theme.colors.lightRed};
  border-radius: 10px;
  z-index: 8;
`;

export default MainPage;
