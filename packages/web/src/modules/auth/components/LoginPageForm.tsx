import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from './TextField';

interface LoginPageFormProps {
  errors: {
    general: string[];
  };
  onSubmit: Function;
}

const LoginPageForm = ({ errors, onSubmit }: LoginPageFormProps) => {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  return (
    <FormWrapper onSubmit={e => onSubmit(e, email, password)}>
      <TextField
        type="email"
        placeholder="Email"
        value={email}
        onChange={changeEmail}
      >
        <span className="icon-mail" />
      </TextField>
      <TextField
        type="password"
        placeholder="Password"
        value={password}
        onChange={changePassword}
      >
        <span className="icon-lock_outline" />
      </TextField>
      <Error>{errors && errors.general && errors.general[0]}</Error>
      <ButtonsRow>
        <ButtonSubmit>Log In</ButtonSubmit>
      </ButtonsRow>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  margin-top: 28px;
`;

const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const ButtonSubmit = styled.button`
  padding: 13px 42px;
  font-size: 15px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primaryGreen};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.primaryBlue};
  }

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: none;
  }
`;

const Error = styled.div`
  position: absolute;
  font-size: 13px;
  color: ${props => props.theme.colors.redErrorColor};
`;

export default LoginPageForm;
