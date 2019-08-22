import React from 'react';
import styled from 'styled-components';

interface TextFieldProps {
  type: string;
  placeholder: string;
  value: string;
  children: JSX.Element[] | JSX.Element;
  onChange: Function;
}

const TextField = ({
  type,
  placeholder,
  value,
  children,
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
    <InputIcon>{children}</InputIcon>
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

const InputIcon = styled.div`
  position: absolute;
  width: 15px;
  right: 3px;
  bottom: 8px;
  color: ${props => props.theme.colors.loginPageInputPlaceholder};
  transition: 0.5s;
  font-size: 18px;
`;

const InputStyled = styled.input`
  width: 100%;
  margin-top: 26px;
  padding: 10px 25px 8px 2px;
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

  &:focus + ${InputLine} + ${InputIcon} {
    color: ${props => props.theme.colors.primaryBlue};
  }
`;

export default TextField;
