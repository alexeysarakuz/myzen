import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavHeader = () => (
  <Wrapper>
    <NavCol>
      <Logo>myzen.</Logo>
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </List>
    </NavCol>
    <NavCol>
      <Auth>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Sign up</Link>
        </li>
      </Auth>
    </NavCol>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  color: ${props => props.theme.colors.white};
`;

const NavCol = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-right: 10px;
`;

const List = styled.ul`
  display: flex;
`;

const Auth = styled.ul`
  display: flex;
`;

export default NavHeader;
