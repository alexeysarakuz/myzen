import { ActivityItemModel } from '../profile.models';
import React from 'react';
import styled from 'styled-components';

interface ActivityItemProps {
  item: ActivityItemModel;
}

const ActivityItem = ({ item }: ActivityItemProps) => (
  <Content>
    <div>
      <Image src={`/images/users/${item.picture}`} alt={item.title} />
    </div>
    <div>
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
    </div>
  </Content>
);

const Content = styled.div`
  display: flex;
  padding: 10px 20px;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 300;
  line-height: 1.55;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 13px;
  line-height: 1.45;
`;

export default ActivityItem;
