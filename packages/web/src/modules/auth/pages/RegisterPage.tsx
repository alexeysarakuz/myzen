import { connect } from 'react-redux';
import { FeedbackItem } from '../auth.models';
import FeedbackSlider from '../components/FeedbackSlider';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import React, { useState } from 'react';
import * as AuthActions from '../auth.actions';
import RegisterPageForm from '../components/RegisterPageForm';
import styled from 'styled-components';
import { validateField } from '../auth.helpers';

const BlueAbstract = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41.4"
    height="53.83"
    viewBox="0 0 41.4 40.83"
  >
    <path
      id="Path_122"
      data-name="Path 122"
      d="M5585.78-11070.409s-.591,6.787,4.314,11.6,13.422,6.938,19.3,2.454,12.878-15.937,12.878-15.937,2.741-2.795,0-7.18a30.034,30.034,0,0,0-10.964-10.357c-4.578-2.59-7.347,0-7.347,0s-9.4,5.974-13.865,10.357S5585.78-11070.409,5585.78-11070.409Z"
      transform="matrix(0.995, -0.105, 0.105, 0.995, -4395.836, 11618.035)"
      fill="#3D4CA5"
    />
  </svg>
);

const RedAbstract = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="66.967"
    height="63.383"
    viewBox="0 0 66.967 63.383"
  >
    <path
      id="Path_122"
      data-name="Path 122"
      d="M5587.16-11781.33c-9.064-8.437-8.542-9.415-8.542-11.944a9.472,9.472,0,0,1,1.4-4.651,66.131,66.131,0,0,1,11.084-13.533,71.226,71.226,0,0,1,14.959-9.821,20.058,20.058,0,0,1,6.224-1.144c3.194,0,3.386.361,11.439,9.016s20.771,25.6,20.771,25.6,5.253,7.573-7.331,19.669c-4.971,4.777-9.492,7.125-13.44,8.3-5.294,1.585-8.846.31-8.846.31S5596.225-11772.894,5587.16-11781.33Z"
      transform="translate(-5578.613 11822.424)"
      fill="#ff6683"
    />
  </svg>
);

interface RegisterPageProps {
  feedbackData: FeedbackItem[];
  register: Function;
}

const RegisterPage = ({ feedbackData, register }: RegisterPageProps) => {
  const [errors, setErrors] = useState({
    name: [''],
    email: [''],
    password: [''],
  });

  const registerUser = (
    e: any,
    username: string,
    email: string,
    password: string,
    emailIsChecked: boolean,
  ) => {
    e.preventDefault();
    let allErrors = {
      name: [''],
      email: [''],
      password: [''],
    };
    allErrors.name = validateField('name', username);
    allErrors.email = validateField('email', email);
    allErrors.password = validateField('password', password);
    setErrors(allErrors);
    if (
      allErrors.name.length === 0 &&
      allErrors.email.length === 0 &&
      allErrors.password.length === 0
    ) {
      register({
        name: username,
        email,
        password,
        enableEmails: emailIsChecked,
      });
    }
    console.log('emailIsChecked', emailIsChecked);
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
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <FeedbackSlider data={feedbackData} />
        <TurquoiseSquare
          src="/images/login-page/TurquoiseAbstract.png"
          alt="TurquoiseAbstract"
        />
        <YellowSquare
          src="/images/login-page/YellowAbstract.png"
          alt="TurquoiseAbstract"
        />
        <AbstractDotTop>
          <BlueAbstract />
        </AbstractDotTop>
        <AbstractDotBottom>
          <BlueAbstract />
        </AbstractDotBottom>
        <AbstractDotLeft>
          <RedAbstract />
        </AbstractDotLeft>
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
  font-weight: bold;
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

const LogoWrapper = styled.div`
  margin-left: 50px;
  margin-top: 30px;
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

const YellowSquare = styled.img`
  position: absolute;
  right: 0;
  top: 30px;
  max-width: 60%;

  @media (min-width: 1600px) {
    max-width: 45%;
  }
`;

const TurquoiseSquare = styled.img`
  position: absolute;
  left: 0;
  bottom: 20px;
  max-width: 60%;

  @media (min-width: 1600px) {
    max-width: 45%;
  }
`;

const AbstractDotTop = styled.div`
  position: absolute;
  top: 120px;
  right: 40px;
`;

const AbstractDotBottom = styled(AbstractDotTop)`
  top: auto;
  right: auto;
  left: 40px;
  bottom: 60px;
`;

const AbstractDotLeft = styled.div`
  position: absolute;
  width: 10px;
  z-index: 10;
  top: 70px;
  left: 40px;

  svg {
    max-width: 40px;
  }
`;

RegisterPage.defaultProps = {
  feedbackData: [
    {
      id: 0,
      image: '/images/login-page/founder.png',
      name: 'Alex Sarakuz',
      position: 'Founder',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi atque voluptatum harum quidem dignissimos, deserunt facere iusto recusandae alias nostrum repellendus natus dicta vel soluta est obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi atque voluptatum harum quidem dignissimos, deserunt facere iusto recusandae alias nostrum repellendus natus dicta vel soluta est obcaecati.',
    },
  ],
};

const mapDispatchToProps = {
  register: AuthActions.register,
};

export default connect(
  null,
  mapDispatchToProps,
)(RegisterPage);
