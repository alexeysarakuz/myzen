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
    <input
      type="checkbox"
      name={name}
      checked={value}
      onChange={() => onChange(!value)}
    />
    <label htmlFor=""></label>
    <div>{placeholder}</div>
  </CheckboxWrapper>
);

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default CustomCheckbox;
