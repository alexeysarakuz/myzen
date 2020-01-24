import TabTitle from './TabTitle';
import React from 'react';
import styled from 'styled-components';

interface TabsProps {
  activeTab: string;
  setActiveTab: Function;
  children: JSX.Element[];
}

const Tabs = ({ activeTab, setActiveTab, children }: TabsProps) => {
  let activeId = 0;
  return (
    <>
      <Header>
        {children.map((child: any, index: any) => {
          const title = child.props['data-title'];
          title === activeTab && (activeId = index);
          return (
            <TabTitle title={title} key={title} setActiveTab={setActiveTab} />
          );
        })}
        <Line offset={activeId} />
      </Header>
      <div>
        {children.filter(child => child.props['data-title'] === activeTab)}
      </div>
    </>
  );
};

const Header = styled.div`
  position: relative;
  display: flex;
  border-bottom: 2px solid ${props => props.theme.colors.lightGray};

  & > div {
    width: 100%;
    padding: 15px 30px;
    color: ${props => props.theme.colors.darkGrayTabs};
    font-size: 13.5px;
    line-height: 1.5;
    text-align: center;
    border-right: 2px solid ${props => props.theme.colors.lightGrayTabs};
    cursor: pointer;
  }

  & > div:last-child {
    border-right: none;
  }
`;

const Line = styled.hr<{ offset: number }>`
  position: absolute;
  height: 2px;
  width: 33.3%;
  bottom: 0;
  left: ${props => props.offset * 33.3}%;
  margin: 0;
  background-color: ${props => props.theme.colors.cyan};
  border: none;
  transition: 0.3s;
`;

export default Tabs;
