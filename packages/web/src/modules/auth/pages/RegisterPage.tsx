import { connect } from 'react-redux';
import { FeedbackItem } from '../auth.models';
import { getRegisterErrors } from '../auth.reducer';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import * as AuthActions from '../auth.actions';
import RegisterPageForm from '../components/RegisterPageForm';
import RightColumn from '../components/RightColumn';
import styled from 'styled-components';
import { validateField } from '../auth.helpers';

interface RegisterPageProps {
  registerErrors: {
    username?: string[];
    email?: string[];
    password?: string[];
  };
  feedbackData: FeedbackItem[];
  resetErrors: Function;
  setRegisterErrors: Function;
  register: Function;
}

const RegisterPage = ({
  registerErrors,
  setRegisterErrors,
  resetErrors,
  register,
}: RegisterPageProps) => {
  const errors = registerErrors;

  useEffect(() => {
    resetErrors();
  }, [resetErrors]);

  const registerUser = (
    e: any,
    username: string,
    email: string,
    password: string,
    emailIsChecked: boolean,
  ) => {
    e.preventDefault();

    let allErrors = {
      username: [''],
      email: [''],
      password: [''],
    };
    allErrors.username = validateField('username', username);
    allErrors.email = validateField('email', email);
    allErrors.password = validateField('password', password);

    if (
      allErrors.username.length === 0 &&
      allErrors.email.length === 0 &&
      allErrors.password.length === 0
    ) {
      register({
        name: username.split(' ')[0],
        surname: username.split(' ')[1],
        email,
        password,
        enableEmails: emailIsChecked,
      });
    } else {
      setRegisterErrors(allErrors);
    }
  };

  return (
    <PageWrapper>
      <LeftCol>
        <LeftWrapper>
          <PageTitle>Getting Started</PageTitle>
          <PageAlternative to="/login">
            Already have an account?
          </PageAlternative>
          <RegisterPageForm errors={errors} onSubmit={registerUser} />
          <RegisterRules>
            By singing up, you agree to MyZen{"'s "}
            <Link to="/terms-of-conditions">Terms of Conditions</Link> and{' '}
            <Link to="/privacy-policy">Privacy Policy</Link>
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

const mapDispatchToProps = {
  register: AuthActions.register,
  setRegisterErrors: AuthActions.setRegisterErrors,
  resetErrors: AuthActions.resetErrors,
};

const mapStateToProps = (state: any) => ({
  registerErrors: getRegisterErrors(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
