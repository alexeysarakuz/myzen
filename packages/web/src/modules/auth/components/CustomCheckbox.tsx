import React from 'react';
import styled from 'styled-components';

interface CustomCheckboxProps {
  name: string;
  placeholder: string;
  value: boolean;
  onChange: Function;
}

const CustomCheckbox = ({
  name,
  placeholder,
  value,
  onChange,
}: CustomCheckboxProps) => (
  <CheckboxWrapper>
    <StyledInput
      type="checkbox"
      id={name}
      checked={value}
      onChange={() => onChange(!value)}
    />
    <StyledCheckbox htmlFor={name}></StyledCheckbox>
    <label htmlFor={name}>{placeholder}</label>
  </CheckboxWrapper>
);

const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  label {
    cursor: pointer;
  }
`;

const StyledCheckbox = styled.label`
  position: relative;
  width: 14px;
  height: 14px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.primaryBlue};
  border-radius: 4px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background-image: url('/images/login-page/tick.svg');
    background-size: cover;
    transition: transform 0.15s;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 0;

  &:checked + label::after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export default CustomCheckbox;
