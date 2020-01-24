import ArrowIcon from './ArrowIcon';
import React from 'react';
import styled from 'styled-components';
import TickIcon from './TickIcon';

interface WidgetProps {
  loaded: boolean;
}

const ProgressWidget = ({ loaded }: WidgetProps) => (
  <WidgetContainer>
    <Row>
      <ProfileImage src="/images/users/4.jpeg" />
      <Title>Check the progress of your order in live</Title>
    </Row>
    <ArrowToBottom>
      <ArrowIcon />
    </ArrowToBottom>
    <Row>
      <Step active loaded={loaded}>
        <TickContainer loaded={loaded}>
          <TickIcon />
        </TickContainer>
      </Step>
      <RotateIcon>
        <ArrowIcon />
      </RotateIcon>
      <Step />
      <RotateIcon>
        <ArrowIcon />
      </RotateIcon>
      <Step />
    </Row>
  </WidgetContainer>
);

const WidgetContainer = styled.div`
  position: relative;
  z-index: 24;
  padding: 25px 25px;
  border-radius: 13px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.widgetsShadow};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.colors.primaryLightGray};
  max-width: 150px;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const ArrowToBottom = styled.div`
  margin-left: 19px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Step = styled.div<{ active?: boolean; loaded?: boolean }>`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightGrayStep};

  ${props =>
    !props.active &&
    `
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 12px;
        width: 12px;
        border-radius: 50%;
        border: 1px dashed ${props.theme.colors.primaryBlue};
        transition: 0.5s;
      }
    `}

  ${props =>
    props.active &&
    `
      &::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.6s;
        
        ${props.loaded &&
          `
          width: 48px;
          height: 48px;
          transform: translate(-50%, -50%);
        `}
        background-color: ${props.theme.colors.lightYellow};
      }
    `}
`;

const TickContainer = styled.div<{ loaded: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.6s 0.5s;

  svg {
    width: 17px;
    height: 17px;
    margin-top: 3px;
  }

  ${props =>
    props.loaded &&
    `
    opacity: 1;
  `}
`;

const RotateIcon = styled.div`
  transform: rotate(-90deg);
`;

export default ProgressWidget;
