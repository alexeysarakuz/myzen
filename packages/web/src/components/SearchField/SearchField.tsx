import React from 'react';
import styled from 'styled-components';

const SearchField = () => (
  <FieldContainer>
    Search for a freelancer…
    <Input />
  </FieldContainer>
);

const FieldContainer = styled.div`
  width: 644px;
  max-width: 100%;
  font-family: 'Lato', cursive;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  color: #878da6;
  background-color: ${props => props.theme.colors.darkGraySearchFieldBg};
  border-radius: 6px;
  padding: 15px 10px;
  padding-left: 20px;
`;

const Input = styled.input`
  background-color: ${props => props.theme.colors.darkGraySearchFieldBg};
  border: none;
`;

export default SearchField;
