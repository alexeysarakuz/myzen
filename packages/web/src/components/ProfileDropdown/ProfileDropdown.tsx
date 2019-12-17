import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
interface DropdownProps {
  isOpen: boolean;
  close: () => void;
  logout: () => void;
}

const ProfileDropdown = ({ isOpen, close, logout }: DropdownProps) =>
  isOpen && (
    <>
      <Background onClick={close} />
      <Container>
        <TriangleLine />
        <ul>
          <Item>
            <LinkStyled to="/me">Profile</LinkStyled>
          </Item>
          <Item>
            <LinkStyled to="/search">Recruit</LinkStyled>
          </Item>
          <Item>
            <LinkStyled to="/find-a-work">Find a work</LinkStyled>
          </Item>
          <Item>
            <SpecialLink to="/search">
              Refer &amp; Get an achievement
            </SpecialLink>
          </Item>

          <Line />

          <Item>
            <LinkStyled to="/settings">Settings</LinkStyled>
          </Item>
          <Item>
            <LinkStyled to="/help">Help</LinkStyled>
          </Item>

          <Line />

          <Item>
            <FakeLink onClick={logout}>Logout</FakeLink>
          </Item>
        </ul>
      </Container>
    </>
  );

const Background = styled.div`
  position: fixed;
  z-index: 499;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
`;

const Container = styled.div`
  position: absolute;
  box-sizing: border-box;
  min-width: 224.73px;
  top: 60px;
  right: 0;
  padding: 0 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.profileDropdownShadow};
  border: 1px solid ${props => props.theme.colors.lightGrayProfileBorder};
  border-radius: 3.5px;
  z-index: 500;

  &::after {
    content: '';
    position: absolute;
    top: -20px;
    right: 11px;
    border: 10px solid transparent;
    border-bottom: 10px solid ${props => props.theme.colors.white};
    z-index: 503;
  }

  &::before {
    content: '';
    position: absolute;
    top: -25px;
    right: 7px;
    transform: translateY(-0.45px);
    border: 14px solid transparent;
    border-bottom: 14px solid
      ${props => props.theme.colors.lightGrayProfileBorder};
    z-index: 502;
  }
`;

const TriangleLine = styled.div`
  position: absolute;
  top: 0;
  right: 7px;
  width: 28px;
  height: 3px;
  background-color: ${props => props.theme.colors.white};
  z-index: 503;
`;

const LinkStyled = styled(Link)`
  font-size: 14px;
  line-height: 25px;
  color: ${props => props.theme.colors.darkGray};
  transition: 0.5s;

  &:hover {
    color: ${props => props.theme.colors.primaryBlue};
  }
`;

const SpecialLink = styled(LinkStyled)`
  color: ${props => props.theme.colors.primaryBlue};
`;

const FakeLink = styled.button`
  display: inline-block;
  padding: 0;
  font-size: 14px;
  line-height: 25px;
  color: ${props => props.theme.colors.darkGray};
  border: none;
  background-color: transparent;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primaryBlue};
  }
`;

const Item = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.lightGrayProfileBorder};
`;

export default ProfileDropdown;
