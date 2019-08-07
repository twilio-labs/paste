import * as React from 'react';
import styled from '@emotion/styled';
import {Box} from '@twilio-paste/box';

interface StyledBoxProps {
  ariaLabel?: string;
}
export const StyledBox = styled(Box)<StyledBoxProps>`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  overflow: visible;
  width: 100%;
`;

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = props => {
  return (
    <StyledBox
      as="input"
      m="space0"
      p="space30"
      borderColor="colorBorder"
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth10"
      {...props}
    />
  );
};
