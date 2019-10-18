import React from 'react';
import styled from 'styled-components';

const WorkingWidget = () => (
  <WidgetContainer>
    <Image src="/images/users/0.jpeg" alt="" />
    <Title>Working on your project …</Title>
    <Circle />
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

const Circle = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightYellow};
  margin: 0 auto;
  margin-top: 20px;

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.colors.primaryDarkBlue};
    border-radius: 50%;
  }
`;

export default WorkingWidget;
