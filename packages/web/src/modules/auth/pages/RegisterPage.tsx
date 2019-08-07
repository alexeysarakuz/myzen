import RegisterPageForm from '../components/RegisterPageForm';
import React from 'react';
import styled from 'styled-components';

const RegisterPage = () => {
  const registerUser = (
    e: any,
    username: string,
    email: string,
    password: string,
    emailIsChecked: boolean,
  ) => {
    e.preventDefault();
    console.log('username', username);
    console.log('email', email);
    console.log('password', password);
    console.log('emailIsChecked', emailIsChecked);
  };

  return (
    <PageWrapper>
      <LeftCol>
        <LeftWrapper>
          <PageTitle>Getting Started</PageTitle>
          <PageAlternative>Already have an account?</PageAlternative>
          <RegisterPageForm onSubmit={registerUser} />
          <RegisterRules>
            By singing up, you agree to MyZen <b>Terms of Conditions</b> and {}
            <b>Privacy Policy</b>
          </RegisterRules>
        </LeftWrapper>
      </LeftCol>
      <RightCol></RightCol>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryBlue};
  margin-bottom: 12px;
`;

const PageAlternative = styled.a`
  color: ${props => props.theme.colors.primaryDarkGray};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.primaryDarkGray};
  }
`;

const RightCol = styled.div`
  width: 50%;
  height: 100vh; /* temp */
`;

const LeftCol = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const LeftWrapper = styled.div`
  width: 280px;
`;

const RegisterRules = styled.p`
  margin-top: 30px;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.primaryLightGray};

  b {
    color: ${props => props.theme.colors.primaryDarkGray};
  }
`;

export default RegisterPage;
