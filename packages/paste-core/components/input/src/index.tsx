import * as React from 'react';
import styled from '@emotion/styled';
import {getInputStyles} from './styled.input';

const StyledInput = styled.input`
  ${getInputStyles}
`;

interface InputProps {
  accessibilityControls?: string;
  accessibilityOwns?: string;
  disabled?: boolean;
  inputId?: string;
  name?: string;
  placeholder?: string;
  type: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({disabled, inputId, name, placeholder, type, value}) => (
  <StyledInput disabled={disabled} id={inputId} name={name} placeholder={placeholder} type={type} value={value} />
);

export {Input};
