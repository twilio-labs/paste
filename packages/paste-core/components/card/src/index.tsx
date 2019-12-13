import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {PaddingProps} from '@twilio-paste/types';
import {StaticDiv} from '@twilio-paste/types/src/DomTypes';
import {errorOnBadProps, paddingProps} from './utilities';

interface CardProps extends PaddingProps, StaticDiv {}
const cardProps = paddingProps;

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

export {Card, cardProps};
