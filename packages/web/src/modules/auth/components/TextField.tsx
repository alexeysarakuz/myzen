import React from 'react';
import styled from 'styled-components';

interface TextFieldProps {
  type: string;
  placeholder: string;
  value: string;
  children: JSX.Element[] | JSX.Element;
  error: string;
  onChange: Function;
}

const TextField = ({
  type,
  placeholder,
  value,
  children,
  error,
  onChange,
}: TextFieldProps) => (
  <>
    <InputContainer>
      <InputStyled
        type={type}
        value={value}
        placeholder={placeholder}
        error={error && error.length > 0}
        onChange={({ target: { value } }) => onChange(value)}
      />
      <InputLine />
      <InputIcon error={error && error.length > 0}>{children}</InputIcon>
    </InputContainer>
    <Error>{error}</Error>
  </>
);

const InputContainer = styled.div`
  position: relative;
  display: flex;
`;

const InputLine = styled.div`
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 5px;
  left: 0;
  background-color: ${props => props.theme.colors.primaryBlue};
  transition: 0.3s;
`;

const InputIcon = styled.div<{ error: boolean }>`
  position: absolute;
  width: 15px;
  right: 3px;
  bottom: 8px;
  color: ${props => props.theme.colors.loginPageInputPlaceholder};
  transition: 0.5s;
  font-size: 18px;

  ${props =>
    props.error &&
    `
      color: ${props.theme.colors.redErrorColor};
  `}
`;

const InputStyled = styled.input<{ error: boolean }>`
  width: 100%;
  margin-top: 26px;
  margin-bottom: 5px;
  padding: 10px 25px 8px 2px;
  font-size: 14px;
  color: ${props => props.theme.colors.primaryDarkGray};
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.loginPageInputBorder};
  ${props =>
    props.error &&
    `
      border-bottom-color: ${props.theme.colors.redErrorColor};
  `}

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

const Error = styled.div`
  position: absolute;
  font-size: 13px;
  color: ${props => props.theme.colors.redErrorColor};
`;

export default TextField;
