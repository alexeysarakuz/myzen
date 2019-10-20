import React from 'react';
import styled from 'styled-components';

const Abstractions = () => (
  <>
    <AbstractBlueSquare />
    <AbstractCyanSquare />
    <AbstractYellowSquareBottom />
    <AbstractBlueSquareBottom />
    <AbstractRedSquareBottom />
  </>
);

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

const AbstractCyanSquare = styled.div`
  position: absolute;
  min-width: 50%;
  width: 956px;
  height: 620px;
  left: 250px;
  top: -15px;
  border-radius: 164px;
  transform: rotate(14deg);
  background-color: ${props => props.theme.colors.cyan};
  z-index: 5;

  @media (min-height: 700px) {
    top: 0;
  }

  @media (min-height: 800px) {
    top: 20px;
  }

  @media (min-width: 1697px) {
    width: 1056px;
    height: 720px;
    top: 30px;
    left: 300px;
  }

  @media (max-width: 1300px) {
    left: 60px;
    height: 560px;
  }

  @media (max-width: 1158px) {
    left: 60px;
    top: 60px;
    height: 560px;
  }
`;

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

export default Abstractions;
