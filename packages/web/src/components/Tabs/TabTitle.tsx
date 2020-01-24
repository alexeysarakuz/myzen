import React from 'react';

interface TabTitleProps {
  title: string;
  setActiveTab: Function;
}

const TabTitle = ({ title, setActiveTab }: TabTitleProps) => (
  <div onClick={() => setActiveTab(title)}>{title}</div>
);

export default TabTitle;
