import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Logo = () => <Logotype to="/">myzen</Logotype>;

const Logotype = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;

export default Logo;
