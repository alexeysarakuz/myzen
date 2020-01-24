import React from 'react';
import styled from 'styled-components';

interface WidgetProps {
  loaded: boolean;
}

const ScheduleWidget = ({ loaded }: WidgetProps) => (
  <WidgetContainer>
    <Title>Schedule of your activity</Title>
    <Row>
      <>
        <BackgroundStrip />
        <BackgroundStrip />
        <BackgroundStrip />
        <BackgroundStrip />
        <BackgroundStrip />
        <BackgroundStrip />
      </>
      <>
        <BlueProgress loaded={loaded} />
        <YellowProgress loaded={loaded} />
        <PinkProgress loaded={loaded} />
      </>
    </Row>
  </WidgetContainer>
);

const WidgetContainer = styled.div`
  position: relative;
  z-index: 24;
  padding: 30px 40px;
  border-radius: 13px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.widgetsShadow};
`;

const Title = styled.h2`
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.colors.primaryLightGray};
  margin-bottom: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const BackgroundStrip = styled.div`
  width: 1px;
  height: 90px;
  background-color: ${props => props.theme.colors.lightGrayProgress};
`;

const Progress = styled.div<{ loaded: boolean }>`
  border-radius: 15px;
  position: absolute;
  width: 0;
  transition: 0.8s 0.2s;
`;

const BlueProgress = styled(Progress)`
  ${props =>
    props.loaded &&
    `
    width: 97px;
  `}
  height: 17px;
  background-color: ${props => props.theme.colors.cyan};
  top: 15px;
  left: -10px;
`;

const YellowProgress = styled(Progress)`
  ${props =>
    props.loaded &&
    `
    width: 130px;
  `}
  height: 17px;
  background-color: ${props => props.theme.colors.lightYellow};
  top: 37px;
  right: -10px;
`;

const PinkProgress = styled(Progress)`
  ${props =>
    props.loaded &&
    `
    width: 80px;
  `}
  height: 17px;
  background-color: ${props => props.theme.colors.pink};
  top: 61px;
  left: 30px;
`;

export default ScheduleWidget;
