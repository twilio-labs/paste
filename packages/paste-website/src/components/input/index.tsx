import * as React from 'react';
import styled from '@emotion/styled';
import {Box, BoxProps, filterBoxPropsFromProps} from '@twilio-paste/box';

export const StyledBox = styled(Box)`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  overflow: visible;
  width: 100%;
`;

type Input = Omit<React.ComponentProps<'input'>, keyof BoxProps | 'ref'>;

export const Input: React.FC<Input> = props => {
  const propsToSpread = filterBoxPropsFromProps(props);
  return (
    <StyledBox
      as="input"
      margin="space0"
      padding="space30"
      borderColor="colorBorder"
      borderRadius="borderRadius20"
      borderStyle="solid"
      borderWidth="borderWidth10"
      {...propsToSpread}
    />
  );
};
