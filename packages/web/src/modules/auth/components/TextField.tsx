import React from 'react';
import styled from 'styled-components';

interface TextFieldProps {
  type: string;
  placeholder: string;
  icon: string;
  value: string;
  onChange: Function;
}

const TextField = ({
  type,
  placeholder,
  icon,
  value,
  onChange,
}: TextFieldProps) => (
  <InputContainer>
    <InputStyled
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={({ target: { value } }) => onChange(value)}
    />
    <InputLine />
    <InputIcon src={`/images/login-page/${icon}`} alt="txt" />
  </InputContainer>
);

const InputContainer = styled.div`
  position: relative;
  display: flex;
`;

const InputLine = styled.div`
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.primaryBlue};
  transition: 0.3s;
`;

const InputStyled = styled.input`
  width: 100%;
  margin-top: 26px;
  padding-top: 10px;
  padding-bottom: 8px;
  font-size: 14px;
  color: ${props => props.theme.colors.primaryDarkGray};
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.loginPageInputBorder};

  &::placeholder {
    color: ${props => props.theme.colors.loginPageInputPlaceholder};
  }

  &:focus {
    outline: none;
  }

  &:focus + ${InputLine} {
    width: 100%;
  }
`;

const InputIcon = styled.img`
  position: absolute;
  width: 15px;
  right: 0;
  bottom: 10px;
`;

export default TextField;
