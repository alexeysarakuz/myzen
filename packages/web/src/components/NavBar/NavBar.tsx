import * as AuthActions from 'modules/auth/auth.actions';
import { connect } from 'react-redux';
import { getIsAuthenticated } from 'modules/auth/auth.reducer';
import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

interface NavBarProps {
  authorized: boolean;
  logout: () => void;
}

const NavBar = ({ authorized = true, logout }: NavBarProps) => (
  <Bar>
    <Logo dark />
    <NavList>
      <li>
        {authorized ? (
          <ListItem to="/getting-started" activeClassName="active" exact>
            <span className="icon icon-add-outline"></span>
            <span>Getting Started</span>
          </ListItem>
        ) : (
          <ListItem to="/register" activeClassName="active" exact>
            <span className="icon icon-add-outline"></span>
            <span>Getting Started</span>
          </ListItem>
        )}
      </li>
      <li>
        <ListItem to="/search" activeClassName="active">
          <span className="icon icon-user-plus"></span>
          <span>Recruit</span>
        </ListItem>
      </li>
      <li>
        <ListItem to="/find-a-work" activeClassName="active">
          <span className="icon icon-search"></span>
          <span>Find a work</span>
        </ListItem>
      </li>
      <li>
        <ListItem to="/about" activeClassName="active">
          <span className="icon icon-information-outline"></span>
          <span>About</span>
        </ListItem>
      </li>
    </NavList>
    <OptionsList>
      <OptionItem>
        <span className="icon-settings"></span>
        <div>Settings</div>
      </OptionItem>
      <OptionItem>
        <span className="icon-help-circle"></span>
        <div>Help</div>
      </OptionItem>
      {authorized && (
        <OptionItem onClick={logout}>
          <span className="icon-switch"></span>
          <div>Log out</div>
        </OptionItem>
      )}
    </OptionsList>
  </Bar>
);

const Bar = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 280px;
  background-color: ${props => props.theme.colors.white};
  padding-left: 20px;
  padding-top: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-weight: 300;
`;

const NavList = styled.ul`
  margin-top: 60px;
`;

const ListItem = styled(NavLink)`
  display: inline-block;
  font-size: 15px;
  line-height: 25px;
  color: ${props => props.theme.colors.darkGray};
  margin-top: 10px;
  margin-bottom: 10px;

  span {
    display: inline-block;
    vertical-align: middle;
    transition: 0.3s;
  }

  span.icon {
    color: ${props => props.theme.colors.darkGray};
    margin-right: 10px;
    font-size: 18px;
  }

  &.active {
    color: ${props => props.theme.colors.primaryBlue};

    span.icon {
      color: ${props => props.theme.colors.primaryBlue};
    }
  }

  &:hover {
    color: ${props => props.theme.colors.primaryBlue};

    span.icon {
      color: ${props => props.theme.colors.primaryBlue};
    }
  }
`;

const OptionsList = styled.ul`
  margin-top: auto;
  margin-bottom: 10px;
`;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.darkGray};
  font-size: 15px;
  margin-top: 25px;
  margin-bottom: 25px;
  cursor: pointer;

  span {
    margin-right: 10px;
    font-size: 18px;
  }
`;

const mapStateToProps = (state: any) => ({
  authorized: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  logout: AuthActions.logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
