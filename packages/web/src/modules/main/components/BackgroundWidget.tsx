import React from 'react';
import styled from 'styled-components';

const BackgroundWidget = () => (
  <WidgetContainer>
    <LeadData>
      <Title>Lead Data</Title>
      <Row>
        <LoaderDark />
        <LoaderLight />
      </Row>
      <Row>
        <LoaderDark />
        <LoaderLight />
      </Row>
    </LeadData>
    <ResultData>
      <Title>Result Data</Title>
      <Row>
        <LoaderDark />
        <LoaderLight />
      </Row>
    </ResultData>
  </WidgetContainer>
);

const WidgetContainer = styled.div`
  padding: 70px 110px;
  background-color: ${props => props.theme.colors.lightGrayWidgetsBg};
  color: ${props => props.theme.colors.primaryLightGray};

  @media (max-width: 615px) {
    transform: scale(1);
    width: 100%;
    box-sizing: border-box;
  }
`;

const Title = styled.h2`
  font-size: 15px;
  text-align: left;
  margin-bottom: 6px;
`;

const LeadData = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: stretch;
`;

const LoaderDark = styled.div`
  width: 80px;
  height: 12px;
  margin-right: 10px;
  margin-top: 13px;
  background-color: ${props => props.theme.colors.darkGrayWidgetLoader};
  border-radius: 20px;
`;

const LoaderLight = styled(LoaderDark)`
  width: 100px;
  margin-left: 20px;
  background-color: ${props => props.theme.colors.lightGrayWidgetLoader};
`;

const ResultData = styled.div`
  margin-top: 10px;
`;

export default BackgroundWidget;
