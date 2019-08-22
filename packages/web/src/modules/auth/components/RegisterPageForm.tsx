import AuthCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from './TextField';

interface RegisterPageFormProps {
  onSubmit: Function;
}

const RegisterPageForm = ({ onSubmit }: RegisterPageFormProps) => {
  const [username, changeUsername] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const [emailIsChecked, changeEmailToggle] = useState(true);
  return (
    <FormWrapper
      onSubmit={e => onSubmit(e, username, email, password, emailIsChecked)}
    >
      <TextField
        type="text"
        placeholder="Name"
        value={username}
        onChange={changeUsername}
      >
        <span className="icon-user" />
      </TextField>
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
        placeholder="Password (6-12 characters)"
        value={password}
        onChange={changePassword}
      >
        <span className="icon-lock_outline" />
      </TextField>
      <AuthCheckboxes>
        <AuthCheckbox
          name="enable_email"
          placeholder="Enable emails"
          value={emailIsChecked}
          onChange={changeEmailToggle}
        />
      </AuthCheckboxes>
      <ButtonsRow>
        <ButtonSubmit>Sign Up</ButtonSubmit>
        <ButtonSkip to="/dashboard/">Skip</ButtonSkip>
      </ButtonsRow>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  margin-top: 28px;
`;

const AuthCheckboxes = styled.div`
  margin-top: 30px;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.primaryBlue};
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
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
    background-color: ${props => props.theme.colors.primaryBlue};
    box-shadow: 0 0 10px ${props => props.theme.colors.primaryBlue};
  }
`;

const ButtonSkip = styled(Link)`
  color: ${props => props.theme.colors.primaryBlue};
  margin-left: 44px;
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

export default RegisterPageForm;
