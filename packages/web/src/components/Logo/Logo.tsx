import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  dark?: boolean;
}

const Logo = ({ dark = false }: LogoProps) => (
  <Logotype to="/">
    <LogoContent dark={dark}>
      <Strip>|</Strip>
      <div>myzen</div>
      <Dot>.</Dot>
    </LogoContent>
  </Logotype>
);

const Logotype = styled(Link)`
  height: 30px;
  font-size: 24px;
  font-weight: bold;
`;

const LogoContent = styled.div<{ dark: boolean }>`
  display: flex;
  align-items: flex-start;
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
