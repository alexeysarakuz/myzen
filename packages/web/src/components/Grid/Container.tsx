import React from 'react';

interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const Container = ({ children }: ContainerProps) => {
  return <div>{children}</div>;
};

export default Container;
