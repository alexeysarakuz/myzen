import React from 'react';
import styled from 'styled-components';
import EnvelopeIcon from './EnvelopeIcon';

const DailyReportWidget = () => (
  <WidgetContainer>
    <CircleWidget src="/images/interface-elems/circle-graph.png" alt="" />
    <Title>Daily Reports</Title>
    <EnvelopeContainer>
      <EnvelopeIcon />
    </EnvelopeContainer>
  </WidgetContainer>
);

const WidgetContainer = styled.div`
  position: relative;
  z-index: 24;
  padding: 30px 25px;
  border-radius: 13px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.widgetsShadow};
`;

const CircleWidget = styled.img`
  width: 69px;
  height: 75px;
  display: block;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.colors.primaryLightGray};
  margin-top: 20px;
  margin-bottom: 30px;
`;

const EnvelopeContainer = styled.div`
  text-align: center;
`;

export default DailyReportWidget;
