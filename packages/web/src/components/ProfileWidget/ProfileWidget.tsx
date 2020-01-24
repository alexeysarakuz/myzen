import * as AuthActions from 'modules/auth/auth.actions';
import { connect } from 'react-redux';
import {
  getIsAuthenticated,
  getProfilePicture,
} from 'modules/auth/auth.reducer';
import { Link } from 'react-router-dom';
import ProfileDropdown from 'components/ProfileDropdown/ProfileDropdown';
import React, { useState } from 'react';
import styled from 'styled-components';

interface ProfileProps {
  authorized: boolean;
  profile_picture: string;
  logout: () => void;
}

const ProfileWidget = ({
  authorized,
  profile_picture,
  logout,
}: ProfileProps) => {
  const [isLoad, changeLoad] = useState(false);
  const [isOpenDropdown, changeIsOpen] = useState(false);

  const toggleDropwdown = () => changeIsOpen(!isOpenDropdown);

  const closeDropdown = () => changeIsOpen(false);

  const loadedImage = () => changeLoad(true);
  return (
    <Container>
      {authorized ? (
        <>
          <Widget
            onLoad={loadedImage}
            isLoad={isLoad}
            onClick={toggleDropwdown}
          >
            <Image src={`/images/users/${profile_picture}`} />
          </Widget>
          <ProfileDropdown
            isOpen={isOpenDropdown}
            close={closeDropdown}
            logout={logout}
          />
        </>
      ) : (
        <Row>
          <Button to="/login">Log In</Button>
          <Button to="/register">Sign Up</Button>
        </Row>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Widget = styled.div<{ isLoad: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  @keyframes animationGradient {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }

  ${props =>
    !props.isLoad &&
    `
      &::after {
        content: '';
        text-align: center;
        width: 43px;
        height: 43px;
        background: linear-gradient(to right, rgb(243, 243, 243), rgb(201, 201, 201));
	      background-size: 400% 400%;
        animation: animationGradient 3s ease infinite;
      }

      img {
        display: none;
      }
  `}
`;

const Image = styled.img`
  width: 43px;
  height: 43px;
`;

const Row = styled.div`
  display: flex;
`;

const Button = styled(Link)`
  display: block;
  padding: 14.5px 32px;
  font-size: 14px;
  margin-left: 10px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primaryGreen};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.yellow};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 820px) {
    padding: 14.5px 27px;
    font-size: 13px;
    margin-left: 7px;
  }
`;

const mapStateToProps = (state: any) => ({
  authorized: getIsAuthenticated(state),
  profile_picture: getProfilePicture(state),
});

const mapDispatchToProps = {
  logout: AuthActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWidget);
