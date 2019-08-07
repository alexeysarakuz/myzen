import React from 'react';
import styled from 'styled-components';

interface TextFieldProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: Function;
}

const TextField = ({ type, value, placeholder, onChange }: TextFieldProps) => (
  <InputContainer>
    <InputStyled
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={({ target: { value } }) => onChange(value)}
    />
    <InputLine />
  </InputContainer>
);

const InputContainer = styled.div`
  position: relative;
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

export default TextField;
