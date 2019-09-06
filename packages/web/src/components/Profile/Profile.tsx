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
        <Name>Olexiy</Name>
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
  background-color: ${props => props.theme.colors.darkGraySearchFieldBg};
  border-radius: 4px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 45px;
  height: 45px;
`;

const Name = styled.h2`
  padding: 0 30px;
  color: ${props => props.theme.colors.secondaryDarkGray};
  font-size: 13px;
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
  authorized: false,
};

export default Profile;
