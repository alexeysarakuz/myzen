import { ActivitiesList, ActivityItemModel } from '../profile.models';
import ActivityItem from './ActivityItem';
import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs from 'components/Tabs/Tabs';

interface AcitivityProps {
  activity: ActivitiesList;
}

const Activity = ({ activity }: AcitivityProps) => {
  const [activeTab, setActiveTab] = useState('Worker activity');
  console.log(activity);

  return (
    <Paper>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <div data-title="Worker activity">
          {activity.worker.map((item: ActivityItemModel) => (
            <ActivityItem item={item} key={item.id} />
          ))}
        </div>
        <div data-title="Recruter activity">
          {activity.recruter.map((item: ActivityItemModel) => (
            <ActivityItem item={item} key={item.id} />
          ))}
        </div>
        <div data-title="Reviews">
          {activity.reviews.map((item: ActivityItemModel) => (
            <ActivityItem item={item} key={item.id} />
          ))}
        </div>
      </Tabs>
    </Paper>
  );
};

const Paper = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 2px;
`;

export default Activity;
