import React from 'react';
import styled from 'styled-components';

const StatisticsSection = () => (
  <StatisticsRow>
    <StatisticsCol>
      <div>
        <StatisticsImage src="/images/interface-elems/transfer.svg" alt="" />
      </div>
      <div>
        <StatisticsNumber>$440k+</StatisticsNumber>
        <StatisticsComment>Transfered money</StatisticsComment>
      </div>
    </StatisticsCol>
    <StatisticsCol>
      <div>
        <StatisticsImage src="/images/interface-elems/profile.svg" alt="" />
      </div>
      <div>
        <StatisticsNumber>78</StatisticsNumber>
        <StatisticsComment>Created accounts</StatisticsComment>
      </div>
    </StatisticsCol>
    <StatisticsCol>
      <div>
        <StatisticsImage src="/images/interface-elems/deal.svg" alt="" />
      </div>
      <div>
        <StatisticsNumber>978</StatisticsNumber>
        <StatisticsComment>Deals maked</StatisticsComment>
      </div>
    </StatisticsCol>
    <StatisticsCol>
      <div>
        <StatisticsImage
          src="/images/interface-elems/successful_deal.svg"
          alt=""
        />
      </div>
      <div>
        <StatisticsNumber>960</StatisticsNumber>
        <StatisticsComment>Successful deals</StatisticsComment>
      </div>
    </StatisticsCol>
  </StatisticsRow>
);

const StatisticsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const StatisticsImage = styled.img`
  height: 56px;
  margin-right: 20px;
`;

const StatisticsCol = styled.div`
  width: 20%;
  padding: 12px 0;
  display: flex;
  border-right: 1px solid ${props => props.theme.colors.lightGrayProgress};

  &:last-child {
    border-right: none;
  }
`;

const StatisticsNumber = styled.h2`
  font-size: 22px;
  line-height: 1.3;
  color: ${props => props.theme.colors.primaryBlue};
  font-weight: 500;
`;

const StatisticsComment = styled.p`
  line-height: 1.6;
  font-size: 13px;
  color: ${props => props.theme.colors.darkGray};
`;

export default StatisticsSection;
