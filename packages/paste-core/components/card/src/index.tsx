import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {SpacingProps} from '@twilio-paste/types';
import {StaticDiv} from 'packages/@types/utilities';

interface CardFooterProps extends SpacingProps, StaticDiv {}

const CardFooter: React.FunctionComponent<CardFooterProps> = ({children, ...attributes}) => (
  <Box
    borderTopWidth="borderWidth10"
    borderBottomWidth="borderWidth0"
    borderLeftWidth="borderWidth0"
    borderRightWidth="borderWidth0"
    marginTop="space40"
    paddingTop="space40"
    borderColor="colorBorder"
    borderStyle="solid"
    {...attributes}
  >
    {children}
  </Box>
);

interface CardProps extends SpacingProps, StaticDiv {}

const Card: React.FunctionComponent<CardProps> = ({children, ...attributes}) => (
  <Box
    borderWidth="borderWidth20"
    borderColor="colorBorder"
    borderStyle="solid"
    borderRadius="borderRadius20"
    padding="space60"
    {...attributes}
  >
    {children}
  </Box>
);

export {Card, CardFooter};
