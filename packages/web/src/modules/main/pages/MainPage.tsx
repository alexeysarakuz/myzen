import Container from 'components/Grid/Container';
import NavHeader from 'components/NavHeader/NavHeader';
import React from 'react';
import styled from 'styled-components';

const MainPage = () => (
  <Wrapper>
    <Container>
      <NavHeader />
      <MainContent>
        <Title>Cloud-based VoIP provider</Title>
        <Paragraph>
          Our cloud based hosted phone system is simple and flexible with
          powerful call-management features
        </Paragraph>
        <Button>Let&apos;s get started</Button>
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
  margin-top: 100px;
  margin-left: 130px;

  @media (max-width: 1300px) {
    margin-left: 70px;
  }
`;

const Title = styled.h2`
  max-width: 500px;
  font-size: 60px;
  font-weight: 900;
  color: ${props => props.theme.colors.white};
`;

const Paragraph = styled.h2`
  max-width: 300px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 1.6;
  color: ${props => props.theme.colors.white};
`;

const Button = styled.button`
  padding: 13px 42px;
  font-size: 15px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primaryGreen};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  margin-bottom: 40px;

  &:hover {
    background-color: ${props => props.theme.colors.lightYellow};
  }

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: none;
  }
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
  height: 1091px;
  left: -361.49px;
  top: -469.06px;
  border-radius: 314px;
  transform: rotate(14deg);
  background-color: ${props => props.theme.colors.primaryDarkBlue};
  z-index: 6;

  @media (max-width: 1455px) {
    width: 1262px;
  }

  @media (max-width: 1300px) {
    width: 1062px;
  }

  @media (max-width: 1115px) {
    width: 962px;
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
  z-index: 5;

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
