// NPM
import React from 'react';
import styled from 'styled-components';

// COMPONENTS

// ACTIONS/CONFIG

// STYLES
const InputField = styled.input`
  font-family: inherit;
  font-size: inherit;
  background: transparent;
  border: 2px solid ${props => props.theme.colors.base};
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  padding: 10px 20px;

  margin-bottom: 15px;
`;

// MODULE
type Props = {
  value: string,
  onChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  type: string,
  placeholder: string | ''
};

export default function Input({ value, onChange, type, placeholder }: Props): ReactElement {
  return <InputField type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}
