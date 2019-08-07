import AuthCheckbox from './CustomCheckbox';
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
        value={username}
        placeholder="Name"
        onChange={changeUsername}
      />
      <TextField
        type="email"
        value={email}
        placeholder="Email"
        onChange={changeEmail}
      />
      <TextField
        type="password"
        value={password}
        placeholder="Password"
        onChange={changePassword}
      />
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
        <ButtonSkip>Skip</ButtonSkip>
      </ButtonsRow>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  margin-top: 27px;
`;

const AuthCheckboxes = styled.div`
  margin-top: 30px;
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
`;

const ButtonSkip = styled.a`
  color: ${props => props.theme.colors.primaryBlue};
  margin-left: 44px;
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

export default RegisterPageForm;
