import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  dark?: boolean;
}

const Logo = ({ dark = false }: LogoProps) => (
  <Logotype to="/">
    <Strip>|</Strip>
    <Title dark={dark}>myzen</Title>
    <Dot>.</Dot>
  </Logotype>
);

const Logotype = styled(Link)`
  display: inline-block;
  height: 30px;
  font-size: 24px;
  font-weight: 600;

  div {
    display: inline-block;
  }
`;

const Title = styled.div<{ dark: boolean }>`
  color: ${props => props.theme.colors.white};
  ${props => props.dark && `color: ${props.theme.colors.primaryBlue}`};
`;

const Dot = styled.div`
  color: ${props => props.theme.colors.yellow};
  font-size: 25px;
`;

const Strip = styled(Dot)`
  font-size: 23px;
`;

export default Logo;
