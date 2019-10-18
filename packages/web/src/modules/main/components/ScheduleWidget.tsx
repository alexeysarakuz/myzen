import React from 'react';
import styled from 'styled-components';

const ScheduleWidget = () => (
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
        <BlueProgress />
        <YellowProgress />
        <PinkProgress />
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

const Progress = styled.div`
  border-radius: 15px;
  position: absolute;
`;

const BlueProgress = styled(Progress)`
  width: 97px;
  height: 17px;
  background-color: ${props => props.theme.colors.cyan};
  top: 15px;
  left: -10px;
`;

const YellowProgress = styled(Progress)`
  width: 130px;
  height: 17px;
  background-color: ${props => props.theme.colors.lightYellow};
  top: 37px;
  right: -10px;
`;

const PinkProgress = styled(Progress)`
  width: 80px;
  height: 17px;
  background-color: ${props => props.theme.colors.pink};
  top: 61px;
  left: 30px;
`;

export default ScheduleWidget;
