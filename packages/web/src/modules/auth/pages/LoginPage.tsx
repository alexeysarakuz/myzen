import { connect } from 'react-redux';
import { getLoginErrors } from '../auth.reducer';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import RightColumn from '../components/RightColumn';
import LoginPageForm from '../components/LoginPageForm';
import styled from 'styled-components';
import { validateField } from '../auth.helpers';
import * as AuthActions from '../auth.actions';

interface LoginPageProps {
  loginErrors: {
    general: string[];
  };
  resetErrors: Function;
  setLoginErrors: Function;
  login: Function;
}

const LoginPage = ({
  loginErrors,
  resetErrors,
  setLoginErrors,
  login,
}: LoginPageProps) => {
  useEffect(() => {
    resetErrors();
  }, [resetErrors]);

  const loginUser = (e: any, email: string, password: string) => {
    e.preventDefault();
    let allErrors = {
      general: [''],
    };

    allErrors.general = [
      ...validateField('email_login', email),
      ...validateField('password_login', password),
    ];

    if (allErrors.general.length === 0) {
      login({
        email,
        password,
      });
    } else {
      setLoginErrors(allErrors);
    }
  };

  return (
    <PageWrapper>
      <LeftCol>
        <LeftWrapper>
          <PageTitle>Welcome back</PageTitle>
          <PageAlternative to="/register">
            Don&apos;t have an account?
          </PageAlternative>
          <LoginPageForm errors={loginErrors} onSubmit={loginUser} />
          <RegisterRules>
            Do not forget about{' '}
            <Link to="/terms-of-conditions">Terms of Conditions</Link> and{' '}
            <Link to="/privacy-policy">Privacy Policy</Link> please
          </RegisterRules>
        </LeftWrapper>
      </LeftCol>
      <RightCol>
        <RightColumn />
      </RightCol>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 45px;
  color: ${props => props.theme.colors.primaryBlue};
  margin-bottom: 22px;

  @media (max-width: 350px) {
    font-size: 30px;
  }
`;

const PageAlternative = styled(Link)`
  color: ${props => props.theme.colors.primaryDarkGray};
  position: relative;
  transition: 0.5s;

  &::after {
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.primaryDarkGray};
    transition: 0.5s;
  }

  &:hover {
    color: ${props => props.theme.colors.primaryBlue};

    &::after {
      border-bottom-color: ${props => props.theme.colors.primaryBlue};
    }
  }

  &:focus {
    outline: none;
    color: ${props => props.theme.colors.primaryBlue};

    &::after {
      border-bottom-color: ${props => props.theme.colors.primaryBlue};
    }
  }
`;

const LeftCol = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    align-items: center;
  }

  @media (min-width: 1750px) {
    width: 60%;
  }
`;

const RightCol = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100vh;
  min-height: 520px;
  background-color: ${props => props.theme.colors.primaryBlue};

  @media (max-width: 960px) {
    display: none;
  }

  @media (min-width: 1750px) {
    width: 40%;
  }
`;

const LeftWrapper = styled.div`
  width: 280px;

  @media (max-width: 800px) {
    width: 320px;
  }

  @media (max-width: 457px) {
    width: 280px;
  }

  @media (max-width: 350px) {
    width: 260px;
  }
`;

const RegisterRules = styled.p`
  margin-top: 30px;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.primaryLightGray};

  a {
    color: ${props => props.theme.colors.primaryDarkGray};
  }
`;

const mapStateToProps = (state: any) => ({
  loginErrors: getLoginErrors(state),
});

const mapDispatchToProps = {
  resetErrors: AuthActions.resetErrors,
  login: AuthActions.login,
  setLoginErrors: AuthActions.setLoginErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
