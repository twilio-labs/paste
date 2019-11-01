import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {StyledCallout} from './styles';
import {CalloutProps, CalloutTitleProps, CalloutTextProps} from './types';

const CalloutTitle: React.FC<CalloutTitleProps> = ({as = 'h3', children}) => (
  <Text as={as} display="block" fontWeight="fontWeightMedium" marginBottom="space40">
    {children}
  </Text>
);

const CalloutText: React.FC<CalloutTextProps> = ({as = 'p', children, marginTop, marginBottom}) => (
  <Text as={as} marginTop={marginTop} marginBottom={marginBottom}>
    {children}
  </Text>
);

const Callout: React.FC<CalloutProps> = props => {
  return (
    <StyledCallout
      marginTop="space60"
      marginBottom="space60"
      paddingTop="space40"
      paddingRight="space60"
      paddingBottom="space40"
      paddingLeft="space60"
      variant={props.variant}
    >
      {props.children}
    </StyledCallout>
  );
};

Callout.defaultProps = {
  variant: 'primary',
};

export {Callout, CalloutTitle, CalloutText};
