import React from 'react';
import styled from 'styled-components';

import BackgroundWidget from './BackgroundWidget';
import DailyReportWidget from './DailyReportWidget';
import ProgressWidget from './ProgressWidget';
import ScheduleWidget from './ScheduleWidget';
import WorkingWidget from './WorkingWidget';

const Widgets = () => (
  <>
    <Row>
      <WorkingWidgetContainer>
        <WorkingWidget />
      </WorkingWidgetContainer>
      <DailyReportWidgetContainer>
        <DailyReportWidget />
      </DailyReportWidgetContainer>
    </Row>
    <Row>
      <ScheduleWidgetContainer>
        <ScheduleWidget />
      </ScheduleWidgetContainer>
      <ProgressContainer>
        <ProgressWidget />
      </ProgressContainer>
    </Row>
    <BackgroundContainer>
      <BackgroundWidget />
    </BackgroundContainer>
  </>
);

const Row = styled.div`
  display: flex;

  @media (max-width: 700px) {
    justify-content: space-between;
  }
`;

const WorkingWidgetContainer = styled.div`
  width: 185px;
  margin-left: 15px;

  @media (max-width: 1390px) {
    position: relative;
    z-index: 20;
    transform: scale(0.9);
  }
`;

const DailyReportWidgetContainer = styled.div`
  width: 185px;
  margin-left: 230px;
  margin-top: 20px;

  @media (max-width: 1390px) {
    position: relative;
    z-index: 20;
    transform: scale(0.9);
    margin-left: 160px;
  }
`;

const ScheduleWidgetContainer = styled.div`
  width: 270px;
  margin-top: 24px;
  margin-left: 10px;

  @media (max-width: 1390px) {
    position: relative;
    z-index: 20;
    transform: scale(0.9);
  }
`;

const ProgressContainer = styled.div`
  width: 270px;
  margin-top: 60px;
  margin-left: 60px;

  @media (max-width: 1390px) {
    position: relative;
    z-index: 20;
    transform: scale(0.9);
    margin-top: 40px;
    margin-left: 20px;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 100px;
  z-index: 19;

  @media (max-width: 1390px) {
    transform: scale(0.9);
    top: 80px;
    left: 80px;
  }
`;

export default Widgets;
