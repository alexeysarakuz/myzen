import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

interface ProfileProps {
  authorized: boolean;
}

const Profile = ({ authorized }: ProfileProps) => (
  <div>
    {authorized ? (
      <ProfileWidget>
        <Image src="https://thispersondoesnotexist.com/image" />
        <Name>Alexeysarakuz</Name>
      </ProfileWidget>
    ) : (
      <div>
        <Button to="/register">Sign Up / Log In</Button>
      </div>
    )}
  </div>
);

const ProfileWidget = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 3px 10px ${props => props.theme.colors.primaryBlueShadow};
  overflow: hidden;
`;

const Image = styled.img`
  width: 45px;
  height: 45px;
`;

const Name = styled.h2`
  padding: 0 25px;
  color: ${props => props.theme.colors.secondaryDarkGray};
  font-size: 13px;
  font-weight: 500;
`;

const Button = styled(Link)`
  display: block;
  padding: 13px 32px;
  font-size: 15px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primaryBlue};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 0 10px ${props => props.theme.colors.primaryBlueShadow};

  &:hover {
    background-color: ${props => props.theme.colors.primaryGreen};
  }

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: none;
  }
`;

Profile.defaultProps = {
  authorized: true,
};

export default Profile;
