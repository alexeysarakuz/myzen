import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 1600px;
  margin: 0 auto;
`;

export default Container;
