import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {PaddingProps, BorderWidthProps, BorderColorProps, BorderStyleProps} from '@twilio-paste/types';
import {StaticDiv} from '@twilio-paste/types/src/DomTypes';
import {
  errorOnBadProps,
  spacingProps,
  borderWidthProps,
  borderStyleProps,
  borderColorProps,
  paddingProps,
} from './utilities';

interface CardFooterProps extends PaddingProps, StaticDiv {}
const cardFooterProps = paddingProps;

const CardFooter: React.FunctionComponent<CardFooterProps> = ({children, ...attributes}) => {
  errorOnBadProps(attributes, cardFooterProps);

  return (
    <Box
      as="article"
      borderTopWidth="borderWidth10"
      borderBottomWidth="borderWidth0"
      borderLeftWidth="borderWidth0"
      borderRightWidth="borderWidth0"
      marginTop="space40"
      paddingTop="space40"
      borderStyle="solid"
      {...attributes}
    >
      {children}
    </Box>
  );
};

interface CardProps extends PaddingProps, BorderStyleProps, BorderColorProps, BorderWidthProps, StaticDiv {}
const cardProps = [...paddingProps, ...borderWidthProps, ...borderColorProps, ...borderStyleProps];

const Card: React.FunctionComponent<CardProps> = ({children, ...attributes}) => {
  errorOnBadProps(attributes, cardProps);

  return (
    <Box
      as="article"
      borderWidth="borderWidth20"
      borderColor="colorBorder"
      borderStyle="solid"
      borderRadius="borderRadius20"
      padding="space60"
      backgroundColor="colorBackgroundBody"
      {...attributes}
    >
      {children}
    </Box>
  );
};

export {Card, CardFooter, cardProps, cardFooterProps};
