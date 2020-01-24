import React from 'react';
import styled from 'styled-components';

interface WidgetsProps {
  loaded: boolean;
}

const WorkingWidget = ({ loaded }: WidgetsProps) => (
  <WidgetContainer>
    <Image src="/images/users/0.jpeg" alt="" />
    <Title>Working on your project …</Title>
    <Circle loaded={loaded} />
  </WidgetContainer>
);

const WidgetContainer = styled.div`
  position: relative;
  z-index: 24;
  padding: 0 20px;
  padding-bottom: 30px;
  border-radius: 13px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.widgetsShadow};
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  position: relative;
  top: -25px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Title = styled.h2`
  font-size: 15px;
  max-width: 144px;
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.colors.primaryLightGray};
  margin: 5px 0;
`;

const Circle = styled.div<{ loaded: boolean }>`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  margin-top: 20px;

  &::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.lightYellow};
    transform: scale(0);
    transition: 0.8s;

    ${props =>
      props.loaded &&
      `
      transform: scale(1);
  `}
  }

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-color: ${props => props.theme.colors.primaryDarkBlue};
    border-radius: 50%;
    transition: 0.4s 0.5s;

    ${props =>
      props.loaded &&
      `
      transform: translate(-50%, -50%) scale(1);
  `}
  }
`;

export default WorkingWidget;
