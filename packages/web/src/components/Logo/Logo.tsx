import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Logo = () => (
  <Logotype to="/">
    <Strip>|</Strip>
    <div>myzen</div>
    <Dot>.</Dot>
  </Logotype>
);

const Logotype = styled(Link)`
  display: flex;
  align-items: flex-start;
  height: 30px;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;

const Dot = styled.div`
  color: ${props => props.theme.colors.yellow};
  font-size: 25px;
`;

const Strip = styled(Dot)`
  font-size: 23px;
`;

export default Logo;
