import { connect } from 'react-redux';
import { getIsAuthenticated } from 'modules/auth/auth.reducer';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

interface ProfileProps {
  authorized: boolean;
}

const Profile = ({ authorized }: ProfileProps) => {
  const [isLoad, changeLoad] = useState(false);

  return (
    <div>
      {authorized ? (
        <ProfileWidget onLoad={() => changeLoad(true)} isLoad={isLoad}>
          <Image src="https://thispersondoesnotexist.com/image" />
        </ProfileWidget>
      ) : (
        <Row>
          <Button to="/login">Log In</Button>
          <Button to="/register">Sign Up</Button>
        </Row>
      )}
    </div>
  );
};

const ProfileWidget = styled.div<{ isLoad: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border-radius: 50%;
  overflow: hidden;

  ${props =>
    !props.isLoad &&
    `
    &::after {
      content: '';
      text-align: center;
      width: 45px;
      height: 45px;
      background-color: ${props.theme.colors.lightGrayTags};
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
`;

const mapStateToProps = (state: any) => ({
  authorized: getIsAuthenticated(state),
});

export default connect(
  mapStateToProps,
  null,
)(Profile);
